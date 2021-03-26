import React, { useState } from "react";
import Header from "../Header";
import OrderForm from "../OrderForm";

const emptyOrder = {
	size: "small",
	sauce: "",
	toppings: [],
	substitute: false,
	special: "",
	quantity: 1,
};

const OrderPage = (props) => {
	const { send } = props;

	const [orderValues, setOrderValues] = useState(emptyOrder);

	const orderFormChange = (name, value, checked) => {
		// check to see if the name and value that came back is a topping
		if (name === "toppings") {
			// checked determines if we need to add it to the toppings array or remove it
			if (checked) {
				setOrderValues({
					...orderValues,
					[name]: [...orderValues.toppings, value],
				});
			} else {
				setOrderValues({
					...orderValues,
					[name]: orderValues.toppings.filter(
						(topping) => topping !== value
					),
				});
			}
		}
		// handles every other input change
		else {
			setOrderValues({
				...orderValues,
				[name]: value,
			});
		}
	};

	const orderFormSubmit = () => {
		const newOrder = {
			size: orderValues.size,
			sauce: orderValues.sauce,
			toppings: orderValues.toppings,
			substitute: orderValues.substitute,
			special: orderValues.special.trim(),
			quantity: orderValues.quantity,
		};
		send(newOrder);
	};

	return (
		<>
			<Header />
			<OrderForm
				values={orderValues}
				change={orderFormChange}
				submit={orderFormSubmit}
			/>
		</>
	);
};

export default OrderPage;
