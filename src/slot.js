import { Component } from 'preact';

export function Slot(props, context) {
	Component.call(this, props, context);
	let update = () => {
		const {props, state} = this;
		let content = this.context.slots.named[props.name];
		if (!state.content || content != state.content[props.name]) {
			this.setState({ content: Object.assign({}, state.content, {[props.name]: content}) });
		}
	};
	this.componentDidMount = () => {
		this.context.slots.onChange[this.props.name] = update;
	};
	this.componentWillUnmount = () => {
		this.context.slots.onChange[this.props.name] = update;
	};
	update();
}
(Slot.prototype = new Component()).constructor = Slot;
Slot.prototype.render = function(props, { content = {} }) {
	let child = props.children[0];
	return typeof child==='function' ? child(content[props.name]) : (content[props.name][0]) || child;
};
