import { h, render } from 'preact';
import { SlotProvider } from 'src';

describe('SlotProvider', () => {
	it('should provide slots into context', () => {
		const Spy = new jasmine.Spy();

		render((
			<SlotProvider>
				<Spy />
			</SlotProvider>
		), document.createElement('x-root'));

		expect(Spy).toHaveBeenCalledWith(jasmine.any(Object), {
			slots: {
				named: {},
				onChange: {}
			}
		});
	});
});
