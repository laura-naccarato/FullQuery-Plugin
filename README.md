# fullpage-jquery-plugin
A Jquery plugin that makes divs or sections take up the full screen size.
# FullQuery

## What Is FullQuery?

FullQuery is a Jquery plugin that will dynamically make your sections full screen, as well as creating buttons for scrolling to the next page. I created FullQuery because when I first began making HTML/CSS pages, I frequently wished for an easier way to accomplish full page websites, without needing to apply heights to every section/div. Now that I have learned the magic of JavaScript and Jquery, I have been able to create a simple solution that is very easy to implement.

## Setting up your HTML for FullQuery

Fullquery requires every section to have an id applied to it in order to navigate correctly. The Id name does not matter, as long as it is there

` <section id= "section1">`

## How to Use FullQuery

To implement FullQuery in to your page, you will need to  link to the FullQueryplugin, as well as the supplied stylesheet.

To run FullQuery with the built in settings, simply add the following code to your main script file:

`
$(function() {
$("section").fullPage();
});
`

This will cause all sections within your HTML to be displayed as max VH and VW, as well as removing the scroll bar from the page

## Next Page Buttons

To add navigational buttons to your site, you simply need to add one anchor link per page with a class of "nextPage" (Case sensitive)

`
<a href="#" class ="nextPage"></a>
`

## FullQuery Options

You can also make some changes to the behaviour of FullQuery

You can decide whether the navigation buttons are animated by choosing true or false

`animation: true`

You can add your own custom up and down arrows.

`upArrow: "images/down_arrow.svg", downArrow: "images/up_arrow.svg"`

You can also control the speed at which the page scrolls

`animationSpeed: "slow"`

##Credits

Default Buttons are created by Bradley Wilton from the Noun Project