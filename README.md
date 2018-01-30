<div align="center">
    <img align="center" src="https://i.imgur.com/8b1gCrF.jpg" width="1650">
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

An extended example follows:

```js
import { Slot, SlotContent, SlotProvider } from 'preact-slots'

const Header = () => (
    <header class="header">
        <Slot name="title">Slots Demo</Slot>
        <Slot name="toolbar">
            { items => items && <nav>{items}</nav> }
        </Slot>
    </header>
)

const EditPage = ({ page, content, onSave, onCancel }) => (
    <div class="page-editor">
        <SlotContent slot="title">Editing {page}</SlotContent>
        <SlotContent slot="toolbar">
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </SlotContent>
        <textarea value={content} />
    </div>
)

render(
    <SlotProvider>
        <div class="app">
            <Header />
            <EditPage />
        </div>
    </SlotProvider>
)
```


### Similar Libraries

Slots are a concept that has been around for a while.

In particular, [@camwest](https://github.com/camwest)'s [react-slot-fill](https://github.com/camwest/react-slot-fill) is similar to preact-slots, but geared towards React.


### License

[MIT License](https://oss.ninja/mit/developit) © [Jason Miller](https://jasonformat.com)
