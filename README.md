# Unsemantic CSS Framework

This is a fluid grid system for mobile, tablet, and desktop. It works in way similar to its predecessor, the [960 Grid System](http://960.gs/), but instead of a set number of columns, it's entirely based on percentages, allowing for greater freedom in responsive rendering.

Unsemantic was built with extensibility in mind, using [Sass](http://sass-lang.com/). While you can use the CSS as is, some developers prefer to use their own class names, and want only the bare minimum CSS required for a particular page.

To that end, you can use a "silent" Sass approach, and write your own Sass code for use with Unsemantic's base styles (for instance, there's a placeholder named `%grid-container`).

Unsemantic supports all major browsers: Chrome, Firefox, Internet Explorer (7+), Opera, and Safari.

---

#### Read more here: [http://unsemantic.com](http://unsemantic.com)

---

Example Usage
------

There are grid classes for multiples of five: 5, 10, 15 … 95, 100. There are also grid classes for dividing a page into thirds, namely: `grid-33` and `grid-66`.

```css
<div class="grid-container">
  <div class="grid-25">
    I span 25% of the page width.
  </div>
  <div class="grid-50">
    I span 50% of the page width.
  </div>
  <div class="grid-25">
    I span 25% of the page width.
  </div>
</div>
```

For instance, if you want a column that occupies 50% of the page width, simply use `class="grid-50"`:

```css
<div class="grid-container">
  <div class="grid-50">
    I span 50% of the page width.
  </div>
</div>
```

---

Demos
----------

#### Responsive Demo
The following demos make use of `@media` queries:

* [Responsive Demo](http://unsemantic.com/demo-responsive)
* [Responsive Demo](http://unsemantic.com/demo-responsive-rtl) – RTL text

#### Adapt.js Demo
And these demos make use of `Adapt.js`:

* [Adapt.js Demo](http://unsemantic.com/demo-adapt)
* [Adapt.js Demo](http://unsemantic.com/demo-adapt-rtl) – RTL text

---

More CSS Documentation
-------------------------------
Read more here:
[http://unsemantic.com/css-documentation](http://unsemantic.com/css-documentation)

---

Contributing
-----------------
1. Fork the repository on Github
2. Create a named feature branch (like `component_x`)
3. Compose your change(s)
4. Write unit tests for your change(s) (if applicable)
5. Submit to testing until all test measures are successful
6. Submit a Pull Request using Github

Found a Bug?
-----------------

If you think you've found a bug, and can verify that it is reproducable, file a ticket on [GitHub](https://github.com/nathansmith/unsemantic/issues/new).

---

License and Authors
----------------------------
Author: [Nathan Smith](https://github.com/nathansmith)

Basically, you can use this code under whichever license you prefer*, as this is dual-licensed under both [MIT](http://opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html).

* http://opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html



*Some open source projects, such as [WordPress](https://wordpress.org/) and [Drupal](https://www.drupal.org/), require [GPL](http://www.gnu.org/licenses/gpl.html).