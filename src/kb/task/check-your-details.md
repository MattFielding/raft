---
title: Check your details
templateEngineOverride: njk,md
---

This common pattern in the design system allows users check their answers before submitting information to a service. It's essentially a summary-view of a user's previously submitted forms.
> [!INFO] Check the design system for guidance on usage: https://design-system.service.gov.uk/patterns/check-answers/

You can use either [[HTML vs Nunjucts Macros|Nunjucts macros or html]]  to build the pattern.

## Things you may want to do
There are a few things you can do with this pattern to make it act more realistic.

### 1. Behaviour of change links
There's a recommended system behaviour that doesn't currently ship with the prototyping kit when a user needs to change a value via one of the 'change' links.

After making a change to a previous question it is expected that the user is taken straight back to the summary view again unless the new answer creates the need to ask further questions before returning the user to the summary.

This behaviour needs some addtional coding. Here are a number of ways of achieiving the desired outcome

[[Contextual linking and routing|Learn how to return the user back to the summary page after making a change]]

### 2. Using some maths to do calculations
Sometimes there's a need to playback information to the user that goes further than simply replaying the given answer. One example is when several numerical values have been given and the summary page needs to give a totalled up value

[[Calculations|Learn how to add muitilpe values on a summry page and display it to the user]]

### 3. Outputting data in different formats
Data collected in a journey isn't always displayed back to the user in the format it was captured.

An example of this is when a user is asked their date of birth. The recommended way to capture this data is in 3 numeric input fields for day, month and year. However the correct way to display the data is different to this. For example the date '09 02 1979' should be displayed as '9 February 1979'. This can be acheived

[[Outputting data from the data store|Learn how to manipulate the format of data you present to users]]
