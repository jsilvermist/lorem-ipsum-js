Lorem Ipsum generator
=====================

JavaScript ES module random text generator

## Usage

```sh
npm i @jsilvermist/lorem-ipsum-js
```

```js
import { LoremIpsum } from '@jsilvermist/lorem-ipsum-js';
```

#### Random sentence

```js
const ipsum = new LoremIpsum();
console.log(ipsum.sentence());
```

#### Random sentence specific length

```js
const ipsum = new LoremIpsum();
console.log(ipsum.sentence(12));
```

#### Random sentence dynamic length

```js
const ipsum = new LoremIpsum();
console.log(ipsum.sentence(8, 12));
```

#### Random paragraph

```js
const ipsum = new LoremIpsum();
console.log(ipsum.paragraph());
```

#### Random paragraph specific length

```js
const ipsum = new LoremIpsum();
console.log(ipsum.paragraph(50));
```

#### Random paragraph dynamic length

```js
const ipsum = new LoremIpsum();
console.log(ipsum.paragraph(20, 60));
```
