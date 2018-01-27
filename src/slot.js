import { Component } from 'preact';

export function Slot(props, context) {
	Component.call(this, props, context);
	let update = () => {
		let content = this.context.slots.named[this.props.name];
		if (content!=this.state.content) {
			this.setState({ content });
		}
	};
	this.componentDidMount = () => {
		this.context.slots.onChange.push(update);
	};
	this.componentWillUnmount = () => {
		this.context.slots.onChange.push(update);
	};
	update();
}
(Slot.prototype = new Component()).constructor = Slot;
Slot.prototype.render = function(props, state) {
	let child = props.children[0];
	return typeof child==='function' ? child(state.content) : (state.content || child);
};
