# next-range
> Range array with step for javascript.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-range
```

## apis
| api   | params            | description             |
| ----- | ----------------- | ----------------------- |
| range | start, stop, step | Create integer by range |

## usage
```js
import '@feizheng/next-range';

nx.range(1,10); // step: 1
// [1,2,3,4,5,6,7,8,9,10]

nx.range(10, -1); // step: -1
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-range/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-range
[version-url]: https://npmjs.org/package/@jswork/next-range

[license-image]: https://img.shields.io/npm/l/@jswork/next-range
[license-url]: https://github.com/afeiship/next-range/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-range
[size-url]: https://github.com/afeiship/next-range/blob/master/dist/next-range.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-range
[download-url]: https://www.npmjs.com/package/@jswork/next-range
