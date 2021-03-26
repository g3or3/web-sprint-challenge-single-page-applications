import React, { useState } from "react";
import StyledForm from "../StyledForm";
import { sauces, toppings } from "../ingredients";
import img from "../Assets/pizza.jpg";

const OrderForm = (props) => {
	const [substitute, setSubstitute] = useState(true);
	const [quantity, setQuantity] = useState(2);
	const { values, change, submit } = props;

	const onSubmit = (event) => {
		event.preventDefault();
		submit();
	};

	const onChange = (event) => {
		event.persist();

		const { name, value, type, checked } = event.target;

		/* name returned from target (if checkbox) will be the specific topping so it needs to be changed 
        to "toppings" which is the right property in the order object in state and the value to the topping */
		const nameToUse = type === "checkbox" ? "toppings" : name;
		const valueToUse = type === "checkbox" ? name : value;

		change(nameToUse, valueToUse, checked);
	};

	const toggle = () => {
		change("substitute", substitute);
		setSubstitute((substitute) => !substitute);
	};

	const increment = () => {
		change("quantity", quantity);
		setQuantity((quantity) => quantity + 1);
	};

	const decrement = () => {
		change("quantity", quantity);
		setQuantity((quantity) => quantity - 1);
	};

	return (
		<StyledForm>
			<h2>Build Your Own Pizza</h2>
			<img src={img} alt="pizza"></img>
			<h3>Build Your Own Pizza</h3>
			<form onSubmit={onSubmit}>
				<div>
					<h4>Choice of Size</h4>
				</div>
				<label className="options">
					<select name="size" value={values.size} onChange={onChange}>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</label>

				<div>
					<h4>Choice of Sauce</h4>
				</div>
				{sauces.map((sauce, idx) => {
					return (
						<label className="options" key={idx}>
							<input
								name="sauce"
								type="radio"
								value={sauce}
								onChange={onChange}
							></input>
							{sauce}
						</label>
					);
				})}

				<div>
					<h4>Add Toppings</h4>
				</div>
				<div className="toppings">
					{toppings.map((topping, idx) => {
						return (
							<label key={idx}>
								<input
									name={topping}
									type="checkbox"
									onChange={onChange}
								></input>
								{topping}
							</label>
						);
					})}
				</div>

				<div>
					<h4>Choice of Substitute</h4>
				</div>
				<label className="options">
					<button
						name="substituteChoice"
						type="button"
						onClick={toggle}
						style={{ marginRight: "2%" }}
					>
						{values.substitute === true ? "Yes!" : "No thank you."}
					</button>
					Gluten Free Crust (+ $1.00){" "}
				</label>

				<div>
					<h4>Special Instructions</h4>
				</div>
				<label className="options">
					<input
						name="special"
						type="text"
						value={values.special}
						onChange={onChange}
						style={{
							width: "100%",
							height: "3vh",
						}}
					></input>
				</label>

				<div className="bottom">
					<div className="counter">
						<span id="total">{values.quantity}</span>
						<div className="btns">
							<button
								name="increase"
								type="button"
								onClick={increment}
							>
								+
							</button>
							<button
								name="decrease"
								type="button"
								onClick={decrement}
							>
								-
							</button>
						</div>
					</div>

					<div className="submitBtn">
						<button type="submit">Add to Order $17.99</button>
					</div>
				</div>
			</form>
		</StyledForm>
	);
};

export default OrderForm;
