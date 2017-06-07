# aQuery

Lightweight, stripped-down version of jQuery. Shares the same interface, so you should freely be able to substitute one for the other, as long as you only require the functionality provided by aQuery.

## Dependencies

* Compatible with IE10 or later - requires `document.querySelectorAll` and `element.classList`
* npm / gulp to create custom build

## Building

* `cd` into project folder
* Type `sudo npm install` to install dependencies
* Type `sudo npm install gulp -g` if you have not already install gulp globally
* Type `gulp build` to build project

## Caveats

* `show()` will default the element to `display: block` if the element is still set to `display: none` after removing any inline `display: none` styles

## License

aQuery is released under the MIT License. See license.txt for more details.