export class SlotProvider {
	getChildContext() {
		return {
			slots: {
				named: {},
				onChange: {}
			}
		};
	}

	render(props) {
		return props.children[0];
	}
}
