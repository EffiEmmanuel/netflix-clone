import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				// Show the black bg
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<nav className={`nav ${show && "nav-black"}`}>
			{/* logo */}
			<img
				className="netflix-logo"
				src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
				alt="Netflix logo"
			/>

			{/* User Avatar */}
			<img
				className="user-avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Avatar"
			/>
		</nav>
	);
}

export default Navbar;
