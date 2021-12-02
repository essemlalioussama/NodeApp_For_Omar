
array-utils
===========

[![Build Status](https://travis-ci.org/ultraq/array-utils.svg?branch=master)](https://travis-ci.org/ultraq/array-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/array-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/array-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/array-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/array-utils)
[![License](https://img.shields.io/github/license/ultraq/array-utils.svg?maxAge=2592000)](https://github.com/ultraq/array-utils/blob/master/LICENSE.txt)

A collection of array utilities, meant as a zero-dependency way of working with
arrays.


Installation
------------

Via npm:

```
npm install @ultraq/array-utils --save
```

Via bower:

```
bower install https://github.com/ultraq/array-utils.git --save
```


API
---

### flatten(array)

Flattens an arrays of arrays, returning the newly-flattened array.

 - **array**: The array of arrays to flatten

### range(start, end, step)

Creates an array of numbers from the starting value (inclusive) to the end
(exclusive), with an optional step (the gap between values).

 - **start**: The value to start at, the first item in the returned array.
 - **end**: The value to end with, the last item in the returned array.
 - **step**: The increment/gap between values, defaults to 1.

### remove(array, predicate)

Remove and return the first item from `array` that matches the predicate
function.

 - **array**: The array to search and remove an item from
 - **predicate**: Function to test each item of the array with.  If it returns a
   truthy value for the item, then that item is removed and returned.
