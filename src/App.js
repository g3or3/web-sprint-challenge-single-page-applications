import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./Components/Page/HomePage";
import OrderPage from "./Components/Page/OrderPage";
import ConfirmationPage from "./Components/Page/ConfirmationPage";
import axios from "axios";

const App = () => {
	const [completedOrder, setCompletedOrder] = useState({});
	const history = useHistory();

	const sendOrder = (newOrder) => {
		axios
			.post("https://reqres.in/api/users", newOrder)
			.then((res) => {
				setCompletedOrder(newOrder);
				history.push("/confirmation");
			})
			.catch((err) => console.log(err));
	};

	return (
		<Switch>
			<Route path="/pizza">
				<OrderPage send={sendOrder} />
			</Route>

			<Route path="/confirmation">
				<ConfirmationPage complete={completedOrder} />
			</Route>

			<Route path="/">
				<HomePage />
			</Route>
		</Switch>
	);
};

export default App;
