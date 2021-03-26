import React from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";

const importAll = (r) => {
	return r.keys().map(r);
};

const images = importAll(
	require.context("../Assets/Merchants", false, /\.jpg/)
);

const StyledRestaurants = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 5% 5% 0;
`;

const Restaurants = (props) => {
	return (
		<StyledRestaurants>
			{images.map((image, idx) => {
				return <Restaurant key={idx} img={image} />;
			})}
		</StyledRestaurants>
	);
};

export default Restaurants;
