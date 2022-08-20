import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Protected from "./components/Protected";
import Contact from "./components/Contact";
import VideoChat from "./components/VideoChat";
import "./App.css";
function App() {
	return (
		<div>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/signin" element={<Signin />} />
					<Route
						path="/account"
						element={
							<Protected>
								<Account />
							</Protected>
						}
					/>
					<Route path="/contact" element={<Contact />} />
          <Route path="/video" element={<VideoChat />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
