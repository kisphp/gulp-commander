
[![Build Status](https://travis-ci.org/kisphp/gulp-commander.svg?branch=master)](https://travis-ci.org/kisphp/gulp-commander)

# Kisphp Gulp Commander

Tool to allow modularization of gulp tasks

## Installation

```bash
npm install --save kisphp-gulp-commander
```

## Usage

Create `gulpfile.js` file with the following content:
```javascript
let gulp = require('gulp');
let requireDir = require('require-dir');

let GR = require('kisphp-gulp-commander');

// load tasks
requireDir('./gulp-tasks', { recurse: true });

// run tasks (all chain)
gulp.task('default', GR.getTasks());

// run watch task
gulp.task('watch', GR.getWatch());

// list all registered tasks
gulp.task('list', () => {
    GR.displayList();
});

```

Create `./gulp-tasks/scss.js` file and add css related gulp tasks. At the end of the file add:

```javascript

// here you define scss tasks

let GR = require('kisphp-gulp-commander');

GR.addTask('scss'); // here you register the main scss task
GR.addWatch('watch:scss'); // here you register the watch task
```
> Do the same for other tasks like: `javascript`, `copy-files`, etc

Now execute `gulp` command and it will run all registered commands
