# Unsemantic CSS Framework

This is a fluid grid system for desktop & mobile.

It consists of two versions&hellip;

* One is built with `@media` queries.
* The other uses [Adapt.js](http://adapt.960.gs/) to resize.

The one that uses `@media` queries serves a desktop width site to IE7 and IE8, because they can't really run on mobile anyway. IE6 is not officially supported, due to the nature of how box-sizing has to work, in order to accomodate a fixed gutter, but allow for fluid column widths.

**Notes:**

Supports right-to-left languages (such as Arabic, Hebrew). Just use the `rtl-*` prefixed CSS file(s). This reverses all left/right floats and offsets. For instance, `.push-*` goes right, instead of left, etc.

Currently, there is one break point, at 760px. All styles are defined using Sass silent mixins. This means you can choose not to use the "unsemantic" class names, and can instead `@extend` into your own.

Documentation will be forthcoming. For now, I wanted to get this out there, so people could pick it apart and use it as a learning tool for how Sass handles silent mixins.

Also, I wanted to be able to point people here, when asked "Why isn't [960](http://960.gs/) responsive?" It is my hope that this will eventually obviate the need for the 960 Grid System.