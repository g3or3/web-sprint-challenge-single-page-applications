import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;

	h1 {
		width: 25%;
		text-align: center;
	}

	nav {
		width: 45%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

const Header = (props) => {
	return (
		<StyledHeader>
			<h1>Lambda Eats</h1>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/">About</NavLink>
				<NavLink to="/">Contact</NavLink>
			</nav>
		</StyledHeader>
	);
};

export default Header;
