import element from 'virtual-element'

let MyButton = {

	initialState() {
		return {
			clicked: false,
			clickCount: 0,
			inputVal: "Test!"
		}
	},

	render({ id, props, state}) {
		function onClick(e, component, setState) {
			let count = state.clickCount;
			count ++;
			setState({
				clicked: true,
				clickCount: count
			})
		}

		function onChange(e, component, setState) {
			setState({
				inputVal: e.target.value
			})
		}

		var classes = {
			clicked: state.clicked ? "clicked" : "",
			even: state.clickCount % 2 === 0 ? "even" : "odd"
		}

		return (
			<div>

				<input onChange={onChange} value={state.inputVal} placeholder="this is something" />
				<p>{state.inputVal}</p>

				<button onClick={onClick} class={classes}>{props.children}</button>
				<p>{ state.clicked ? "Clicked" : "Not Clicked" }</p>
				<p>{ state.clickCount } times</p>
			</div>
		)
	}  
}

export {MyButton}