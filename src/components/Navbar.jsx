import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="navbar">
			<div className="leftside">
				<h1>Calendar Scheduling</h1>
			</div>
			<div className="rightside">
				<Link className="navlink" to="/">
					HOME
				</Link>

				{user?.displayName ? (
					<>
					<h4 className="navlink">{user.displayName}</h4>
					<button className="btn btn-danger btn-lg" onClick={handleSignOut}>
						LOGOUT
					</button>
					</>
				) : (
					<Link className="navlink" to="/signin">SIGNIN</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
