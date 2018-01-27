import { SlotProvider, SlotContent, Slot, withSlot } from 'src';
const exported = require('preact-slots');

describe('index.js', () => {
	it('should export { SlotProvider, SlotContent, Slot, withSlot }', () => {
		expect(SlotProvider).toEqual(jasmine.any(Function));
		expect(SlotContent).toEqual(jasmine.any(Function));
		expect(Slot).toEqual(jasmine.any(Function));
		expect(withSlot).toEqual(jasmine.any(Function));
	});

	it('(cjs) export should be a bare object', () => {
		expect(exported).toEqual({
			SlotProvider: jasmine.any(Function),
			SlotContent: jasmine.any(Function),
			Slot: jasmine.any(Function),
			withSlot: jasmine.any(Function)
		});
	});
});
