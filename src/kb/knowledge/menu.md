---
eleventyNavigation:
  key: knowledge
  parent: knowledge-base
  title: Knowledge
navToHtmlOptions:
  showExcerpt: true
title: Knowledge
templateEngineOverride: njk
---

A collection of knowledge

{% set navPages = collections.all | eleventyNavigation("knowledge-base") %}
{% macro renderNavListItem(entry) -%}
<li{% if entry.url == page.url %} class="my-active-class"{% endif %}>
<a href="{{ entry.url }}">{{ entry.title }}</a>
<p>{{ entry.excerpt }}</p>
{%- if entry.children.length -%}
  <ul>
    {%- for child in entry.children %}{{ renderNavListItem(child) }}{% endfor -%}
  </ul>
{%- endif -%}
</li>
{%- endmacro %}

<ul>
{%- for entry in navPages %}{{ renderNavListItem(entry) }}{%- endfor -%}
</ul>