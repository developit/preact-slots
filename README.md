<div align="center">
	<img align="center" src="https://i.imgur.com/7Vk9bvq.jpg" width="1650">
</div>

# preact-slots [![npm](https://img.shields.io/npm/v/preact-slots.svg?style=flat)](https://www.npmjs.org/package/preact-slots) [![travis](https://travis-ci.org/developit/preact-slots.svg?branch=master)](https://travis-ci.org/developit/preact-slots)

Render Preact trees into other Preact trees, like portals.


## Install

**preact-slots** is available on npm:

`npm install --save preact-slots`


### Usage

Define "holes" in your appliation using `<Slot name="foo" />`,
then fill them using `<SlotContent slot="foo">some content</SlotContent>`:

```js
import { SlotProvider, Slot, SlotContent } from 'preact-slots'

render(
	<SlotProvider>
		<div>
			<Slot name="foo">
				Some Fallback Content
			</Slot>
			<SlotContent slot="foo">
				Replacement Content
			</SlotContent>
		</div>
	</SlotProvider>
)
```

The above renders `<div>Replacement Content</div>`.


### License

[MIT License](https://oss.ninja/mit/developit) © [Jason Miller](https://jasonformat.com)
