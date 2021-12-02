
string-utils
============

[![Build Status](https://travis-ci.org/ultraq/string-utils.svg?branch=master)](https://travis-ci.org/ultraq/string-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/string-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/string-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/string-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/string-utils)
[![License](https://img.shields.io/github/license/ultraq/string-utils.svg?maxAge=2592000)](https://github.com/ultraq/string-utils/blob/master/LICENSE.txt)

A collection of utilities for JavaScript strings.


Installation
------------

Via npm:

```
npm install @ultraq/string-utils --save
```

Via bower:

```
bower install https://github.com/ultraq/string-utils.git --save
```


API
---

### escapeHtml(string)

Escapes special HTML characters in a string with their entity code equivalents.
Returns a string safe to use as text within an HTML document.

 - **string**: string to escape.

### format(template, ...values)

Returns the replacement of each placeholder in a template string with a
corresponding replacement value.

 - **template**: template string containing placeholders in the format or `{n}`
   where `n` is the corresponding index value to have filled-in.
 - **...values**: argument list of values to fill in the placeholders in the
   template string with.
