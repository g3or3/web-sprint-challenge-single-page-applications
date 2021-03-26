import React from "react";
import styled from "styled-components";

const StyledRestaurant = styled.div`
	max-width: 100%;
	width: 30%;
	margin-bottom: 5%;

	img {
		width: 100%;
	}

	div {
		width: 75%;
		display: flex;
		justify-content: space-between;
	}

	span {
		border: 3px solid black;
	}
`;

const Restaurant = (props) => {
	const { img } = props;
	return (
		<StyledRestaurant>
			<img src={img} alt="Merchant 1"></img>
			<h3>Restaurant</h3>
			<p>Description</p>
			<div>
				<span>20-30 Min</span>
				<span>$5.99 Delivery Fee</span>
			</div>
		</StyledRestaurant>
	);
};

export default Restaurant;
