export class SlotContent {
	apply(slot, content, fireChange) {
		let { slots } = this.context;
		if (slot) {
			slots.named[slot] = content;
			if (fireChange) {
				let update = slots.onChange[slot]
				if (update) {
					update();
				}
			}
		}
	}

	componentDidMount() {
		this.apply(this.props.slot, this.props.children, true);
	}

	componentWillReceiveProps({ slot, children }) {
		if (slot!==this.props.slot) {
			this.apply(this.props.slot, null, false);
			this.apply(slot, children, true);
		}
		else if (children!==this.props.children) {
			this.apply(slot, children, true);
		}
	}

	componentWillUnmount() {
		this.apply(this.props.slot, null, true);
	}

	render() {
		return null;
	}
}
