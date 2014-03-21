# {{{%= name %}}} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %})

> {%= name %} handlebars helper, for doing foo, bar and baz.

## Installation

Use [npm](npmjs.org) to install the package: `npm i {%= name %}`.

## Register the helper

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "{%= name %}": "*"
  },
  "keywords": [
    "{%= name %}"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the '{%= name %}' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['{%= name %}', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

With that completed, you may now use the `{{{%= shortname(name) %}}}` helper in your templates:

```handlebars
{{{%= shortname(name) %} 'foo'}}
```

Please [report any bugs or feature requests](https://github.com/helpers/{%= name %}/issues/new), thanks!


## Options
### task options
Options can be set in your Gruntfile, in the `{%= name %}` object in the Assemble task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      {%= shortname(name) %}: {
        foo: true
      }
    }
    ...
  }
});
```

## Related projects
{%= include("related-repos-list") %}

## Author
{%= contrib("authors") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}