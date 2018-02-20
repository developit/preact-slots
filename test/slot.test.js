import { h, render } from 'preact';
import { SlotProvider, Slot } from 'src';
import Provider from 'preact-context-provider';

const tick = () => new Promise(setTimeout);

describe('Slot', () => {
	it('should render null for no content', () => {
		const spy = new jasmine.Spy();

		render((
			<SlotProvider>
				<Slot name="foo">{spy}</Slot>
			</SlotProvider>
		), document.createElement('x-root'));

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith(undefined);
	});

	it('should invoke child as function with content', () => {
		const spy = new jasmine.Spy();

		const slots = {
			named: {
				foo: 'bar'
			},
			onChange: {}
		};

		render((
			<Provider slots={slots}>
				<Slot name="foo">{spy}</Slot>
			</Provider>
		), document.createElement('x-root'));

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith('bar');
	});

	it('should update when content changes', async () => {
		const spy = new jasmine.Spy();

		const slots = {
			named: {},
			onChange: {}
		};

		render((
			<Provider slots={slots}>
				<Slot name="foo">{spy}</Slot>
			</Provider>
		), document.createElement('x-root'));

		expect(slots.onChange.foo).toEqual(jasmine.any(Function));

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith(undefined);

		slots.named.foo = 'bar';
		slots.onChange['foo']();
		await tick();

		expect(spy).toHaveBeenCalledTimes(2);
		expect(spy).toHaveBeenCalledWith('bar');
	});

	it('should only update if content has changed', async () => {
		const spy = new jasmine.Spy();

		const slots = {
			named: {
				foo: 'bar'
			},
			onChange: {}
		};

		render((
			<Provider slots={slots}>
				<Slot name="foo">{spy}</Slot>
			</Provider>
		), document.createElement('x-root'));

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith('bar');

		slots.onChange['foo']();
		await tick();

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
