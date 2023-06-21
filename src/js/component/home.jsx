import React from "react";

import Cart from "./cart.jsx";
import Product from "./product.jsx";
import AddUser from "./user.jsx";


const Home = () => {

	return (
		<div className="text-center mt-5">
			<Cart />
			<Product />
			<AddUser />
		</div>
	);
};

export default Home;
