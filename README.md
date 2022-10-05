# Front-End Assessment

## Problem

Create a responsive page displaying two sets of cards of data, with different
layouts. 
Make the page responsive, including mobile and tablet classes for buttons
Have a working hamburger menu

## Solution

I chose to use eleventy w/ nunjucks to tackle the problem, in order to become 
more familiar with them. This allowed me to create macros for the cards as well
as the tooltip ( I called it popover), eliminating redundant coding where possible

The responsive design was handled using flexbox for the page layout and css grid 
for the cards.

A few simple JS functions called on page load handle the button class assignment,
hamburger open/close, as well as the tooltip mouseover.

## Conclusion

The rendered eleventy page works well, with CSS and JS embedded directly in the html.
Only the tooltip SVG is loaded separately, since it appears in multiple locations.

Given more time, I would probably fix the hardcoded tooltips that appear in the
pricing.js data. Also, link/ button hover states and hamburger and tooltip 
appearance can be refined given brand guidelines.