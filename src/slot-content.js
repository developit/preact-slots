export class SlotContent {
	apply(slot, content, fireChange) {
		let { slots } = this.context;
		if (slot) {
			slots.named[slot] = content;
			if (fireChange) {
				for (let i=0; i<slots.onChange.length; i++) {
					slots.onChange[i]();
				}
			}
		}
	}

	componentWillMount() {
		this.apply(this.props.slot, this.props.children[0], true);
	}

	componentWillReceiveProps({ slot, children }) {
		if (slot!==this.props.slot) {
			this.apply(this.props.slot, null, false);
			this.apply(slot, children[0], true);
		}
		else if (children[0]!==this.props.children[0]) {
			this.apply(slot, children[0], true);
		}
	}

	componentWillUnmount() {
		this.apply(this.props.slot, null, true);
	}

	render() {
		return null;
	}
}