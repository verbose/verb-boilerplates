In the command line, run:

```bash
npm install assemble-{%= shortname(name) %} --save
```

Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugin: ['assemble-{%= shortname(name) %}', 'foo/*.js']
  }
}
```

## Configuration

You can also use the plugin with specific targets:

```js
assemble: {
  foo: {
    options: {
      plugin: ['assemble-{%= shortname(name) %}']
    },
    files: {'dist/': 'content/*.md'}
  },
  // The plugin won't run on this target since it's
  // not defined at the task level
  bar: {
    files: {'dist/': 'templates/*.hbs'}
  }
}
```

For more information visit [Assemble's plugins docs](http://assemble.io/plugins/).