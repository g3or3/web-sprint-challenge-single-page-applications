import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Confirmation from "../Confirmation";

const ConfirmationPage = ({ complete }) => {
	return (
		<>
			<Header />
			<Banner />
			<Confirmation complete={complete} />
		</>
	);
};

export default ConfirmationPage;
