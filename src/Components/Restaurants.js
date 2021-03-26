import React from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";

const StyledRestaurants = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 5% 5% 0;
`;

const Restaurants = (props) => {
	return (
		<StyledRestaurants>
			<Restaurant />
			<Restaurant />
			<Restaurant />
			<Restaurant />
			<Restaurant />
			<Restaurant />
		</StyledRestaurants>
	);
};

export default Restaurants;
