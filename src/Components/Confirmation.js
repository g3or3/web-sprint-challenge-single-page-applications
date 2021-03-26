import React from "react";
import styled from "styled-components";

const StyledConfirmation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	margin: 0 auto;
`;

const Confirmation = ({ complete }) => {
	if (complete && Object.keys(complete).length !== 0) {
		return (
			<StyledConfirmation>
				<h1>Congrats! Pizza is on it's way!</h1>
				<p>Here's your order confirmation:</p>
				<p>Size: {complete.size}</p>
				<p>Sauce: {complete.sauce}</p>
				{complete.toppings.map((topping, idx) => {
					return <span key={idx}>{topping}</span>;
				})}
				<p>
					Choice of Substitute:
					{complete.substitute === true ? " Gluten Free Crust" : ""}
				</p>
				<p>Special Instructions: {complete.special}</p>
				<p>Quantity: {complete.quantity}</p>
			</StyledConfirmation>
		);
	} else {
		return <h2 style={{ textAlign: "center" }}>No Order Submitted</h2>;
	}
};

export default Confirmation;
