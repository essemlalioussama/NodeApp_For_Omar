
dom-utils
=========

[![Build Status](https://travis-ci.org/ultraq/dom-utils.svg?branch=master)](https://travis-ci.com/ultraq/dom-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/dom-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/dom-utils)
[![License](https://img.shields.io/github/license/ultraq/dom-utils.svg?maxAge=2592000)](https://github.com/ultraq/dom-utils/blob/master/LICENSE.txt)

A collection of utilities for working with the DOM.


Installation
------------

```
npm install @ultraq/dom-utils
```


API
---

### addEventDelegate(element, eventName, selector, handler)

Add an event listener to `element` that only fires when the target of the event
matches `selector`.

 - **element**:
 - **eventName**:
 - **selector**:
 - **handler**:

### clearChildren(element)

Removes all of an element's child nodes.

 - **element**

### deserialize(htmlString)

Deserialize an HTML string into a document fragment.

 - **htmlString**

### serialize(documentFragment)

Serialize a document fragment into an HTML string.

 - **documentFragment**
