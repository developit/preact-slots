import { h } from 'preact';
import { Slot } from './slot';

export function withSlot(name, alias) {
	return Child => props => h(Slot, { name }, content => {
		let childProps = {};
		childProps[alias || name] = content;
		for (let i in props) childProps[i] = props[i];
		return h(Child, childProps);
	});
}
