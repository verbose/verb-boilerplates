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

With that completed, you may now use the `{{{%= shortname %}}}` helper in your templates:

```handlebars
{{{%= shortname %} 'foo'}}
```

Please [report any bugs or feature requests](https://github.com/helpers/{%= name %}/issues/new), thanks!
