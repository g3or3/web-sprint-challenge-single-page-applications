import styled from "styled-components";

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 0 auto;
	border: 5px solid black;
	padding: 1% 0;

	h2 {
		text-align: center;
	}

	h3,
	h4 {
		padding: 0 2%;
	}

	.toppings {
		background-color: white;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 33vh;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	div {
		padding: 1% 0;
		background-color: lightgray;
	}

	label {
		padding: 1% 2%;
	}

	.options {
		margin: 1% 0;
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		padding: 3% 10% 0;
		background-color: white;
		border-top: 2px solid black;
	}

	.counter {
		display: flex;
		justify-content: space-between;
		background-color: white;
		width: 7%;
	}

	span {
		margin: auto 0;
	}

	.btns {
		width: 60%;
		display: flex;
		flex-direction: column;
	}

	.submitBtn {
		background-color: white;
		margin: auto 0;
		width: 40%;
	}
`;

export default StyledForm;
