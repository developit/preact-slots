# preact-slots [![npm](https://img.shields.io/npm/v/preact-slots.svg?style=flat)](https://www.npmjs.org/package/preact-slots) [![travis](https://travis-ci.org/developit/preact-slots.svg?branch=master)](https://travis-ci.org/developit/preact-slots)

> Render Preact trees into other Preact trees, like portals.


## Install

```sh
npm install --save preact-slots
```


### Usage

```js
import { Slot, SlotContent } from 'preact-slots'

render(
	<div>
		<Slot name="foo">
			Some Fallback Content
		</Slot>
		<SlotContent slot="foo">
			Replacement Content
		</SlotContent>
	</div>
)
```

The above renders `<div>Replacement Content</div>`.


### License

[MIT License](https://oss.ninja/mit/developit) © [Jason Miller](https://jasonformat.com)
