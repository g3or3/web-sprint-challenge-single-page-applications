import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../Assets/restaurant.jpg";

const StyledBanner = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${img});
	background-position: center;
	height: 50vh;

	h2 {
		font-size: 2rem;
		background-color: white;
		color: black;
	}

	a {
		color: white;
	}
`;

const Banner = (props) => {
	return (
		<StyledBanner>
			<h2>Your favorite food, delivered while coding</h2>
			<Link to="/pizza">Pizza?</Link>
		</StyledBanner>
	);
};

export default Banner;
