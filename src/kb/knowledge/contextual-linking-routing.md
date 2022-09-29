---
title: Contextual linking and routing
templateEngineOverride: md, njk
---

There are a few reasons you may want to contextually change the url on a link or contextually route a user to diffrent place:

1. In complex user journeys, where the path through isn't always linear, sometimes jumping steps and sometimes looping back to previous pages in the flow - back links suddenly don't make sense and would need to be contextual depending on where the user came from.
2. Where a user clicks a _change_ link on a [Check your details](check-details.html) page and submits their change they would expect to return to the summary page again and not the next page in the flow.

[[outputting-data-from-data-store|output stored datas]]

1. Checking where the user came from and change the page accordingly
2. Use routing to change the desitination after the page is re-submitted

how to go back to a previous page.

How to submit and return to the summary page.

## 2. Returning a user back to a 'check your details' page
There are several ways to handle this contextual routing. There's no right or wrong way but each has some pros and cons.

### a. Using routes.js
Using routing is probably the _cleanest_ way. Essentially the pages with the question remain unchanged except the form action would change from

```html
<form action="question-2" method="POST" role="form">
```
Where the default action might be to send the user to the next question, to this:
```html
<form action="question-1-answer" method="POST" role="form">
```
So rather than make the form action the next step in the flow, we send the form submission to routes.js where we can choose where to send someone next.

In __routes.js__ we can handle the action: 'question-1-answer' with a new router function.

the __IF__ statement will resolve to the else statement in all cases *unless* the data store contains a variable called __'complete'__

````js
// Contextual routing 
router.post("/question-1-answer", function (req, res) {  
  // grab value from the data store
  let complete = req.session.data.complete
  // if the journey is complete send back to the 'check-your-details' pagee
  if (complete === 'true') {
    res.redirect('check-your-details')  
  } else {  
    res.redirect('question-2')  
  }  
})
````
Setting the data store variable 'complete' as 'true' can be done a number of ways. One way is to set it the first time a user visites the 'check-your-details' page.

We can do this with another router function, this time a 'get' event instead of a 'post' one.

```js
// Set journey as complete
router.get('/check-your-details', function (req, res) {  
  // set data store variable
  req.session.data.complete = 'true'  
  // render the page
  return res.render(version + '/check-your-details')  
})
```

#### So in summary:
When a user reaches the 'check-your-details' page a datastore variable is created to record the fact they have made it passed all the questions.

When a 'change' link is clicked and the user modifies their answer we send them back to 'check-your-details' and not the next question by intercepting the form submission with __routes.js__ and re-routing them as we detect the datastore item is set to true.

### getting nunjucts snippets working

```twig
{% raw %}<h2>Knowledge</h2>
{% for post in collections.Knowledge %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
{% endraw %}
```

### testing diffs

```diff-js
- function myFunction() {
  // replaced
+ function myFunction() {
```