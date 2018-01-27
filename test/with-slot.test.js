import { h, render } from 'preact';
import { withSlot } from 'src';
import Provider from 'preact-context-provider';

const tick = () => new Promise(setTimeout);

describe('withSlot()', () => {
	it('should pass slot content to composed component', async () => {
		const Spy = new jasmine.Spy();

		const slots = {
			named: {
				foo: 'bar'
			},
			onChange: []
		};

		const Child = withSlot('foo')(Spy);

		render((
			<Provider slots={slots}>
				<Child />
			</Provider>
		), document.createElement('x-root'));

		expect(Spy).toHaveBeenCalledTimes(1);
		expect(Spy).toHaveBeenCalledWith({ foo: 'bar', children: [] }, jasmine.anything());
	});

	it('should update when content changes', async () => {
		const Spy = new jasmine.Spy();

		const slots = {
			named: {},
			onChange: []
		};

		const Child = withSlot('foo')(Spy);

		render((
			<Provider slots={slots}>
				<Child />
			</Provider>
		), document.createElement('x-root'));

		expect(Spy).toHaveBeenCalledTimes(1);
		expect(Spy).toHaveBeenCalledWith({ foo: undefined, children: [] }, jasmine.anything());

		expect(slots.onChange).toContain(jasmine.any(Function));

		slots.named.foo = 'bar';
		slots.onChange[0]();
		await tick();

		expect(Spy).toHaveBeenCalledTimes(2);
		expect(Spy).toHaveBeenCalledWith({ foo: 'bar', children: [] }, jasmine.anything());
	});
});
