import { h, render } from 'preact';
import { SlotProvider, SlotContent } from 'src';

describe('Slot', () => {
	it('should provide slots into context', () => {
		const Spy = new jasmine.Spy();

		render((
			<SlotProvider>
				<div>
					<SlotContent slot="foo">bar</SlotContent>
					<Spy />
				</div>
			</SlotProvider>
		), document.createElement('x-root'));

		expect(Spy).toHaveBeenCalledTimes(1);
		expect(Spy).toHaveBeenCalledWith(jasmine.any(Object), {
			slots: {
				named: {
					foo: 'bar'
				},
				onChange: []
			}
		});
	});
});
