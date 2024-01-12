/** @format */

///** @format */

//import React, { Component } from "react";

//export default class Counter extends Component {
//	constructor(props) {
//		super(props);

//		this.state = {
//			count: this.props.intialCounter,
//		};
//	}

//	render() {
//		return (
//			<div>
//				<button
//					onClick={() => {
//						this.changeCount(-1);
//					}}
//				>
//					-
//				</button>
//				<span>{this.state.count}</span>
//				<button
//					onClick={() => {
//						this.changeCount(1);
//					}}
//				>
//					+
//				</button>
//			</div>
//		);
//	}

//	changeCount(count) {
//		this.setState((prevState) => {
//			return { count: prevState.count + count };
//		});
//	}
//}

import React, { useState } from "react";

export default function Counter({ intialCounter }) {
	const [state, setState] = useState({ count: intialCounter });
	return (
		<div>
			<button
				onClick={() =>
					setState((prevState) => {
						return { count: prevState.count - 1 };
					})
				}
			>
				-
			</button>
			<span>{state.count}</span>
			<button
				onClick={() =>
					setState((prevState) => {
						return { count: prevState.count - 1 };
					})
				}
			>
				+
			</button>
		</div>
	);
}
