# fixed-path [![Build Status](https://travis-ci.org/hemanth/fixed-path.svg?branch=master)](https://travis-ci.org/hemanth/fixed-path)

> resolved and normalized path.


## Install

```
$ npm install --save fixed-path
```


## Usage

```js
const fixPath = require('fixed-path');

fixPath('./index.js', (err, fixedPath) => {
	console.log(fixPath); // /Users/Hemanth/labs/fixed-path/index.js
});
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
