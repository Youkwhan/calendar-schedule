import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../firebase-config";
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const locales = {
	"en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const Home = () => {
	const { user } = UserAuth();
	const navigate = useNavigate();

	// Adding an event
	const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
	const [allEvent, setAllEvent] = useState([]);

	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [user]);

	useEffect(() => {
		// mounts (render to DOM)
		const q = query(collection(db, "meeting-dates"));
		const unsub = onSnapshot(q, (snap) => {
			if (snap.docs) {
				const array = snap.docs.map((doc) => {
					return {
						id: doc.id,
						title: doc.get("title"),
						start: doc.get("start").toDate(),
						end: doc.get("end").toDate(),
					};
				});
				console.log(array);
				setAllEvent([...array]);
			}
		});
		return unsub;
	}, []);

	const handleAddEvent = () => {
		// push the new event to the allEvent array
		//setAllEvent([...allEvent, newEvent]);
		addDoc(collection(db, "meeting-dates"), newEvent);
	};

	return (
		<div className="container">
			<div className="title">
				<h1>Calendar</h1>
				<h2>Add New Event</h2>
			</div>
			<div className="events">
				<h4>Meeting Time</h4>
				<input
					type="text"
					placeholder="Add Title"
					style={{ width: "20%", marginRight: "10px" }}
					value={newEvent.title}
					onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
				/>
				<DatePicker
					placeholderText="Start Date"
					style={{ marginRight: "10px" }}
					selected={newEvent.start}
					showTimeSelect
					dateFormat="MMMM d, yyyy h:mm aa"
					onChange={(start) => setNewEvent({ ...newEvent, start: start })}
				/>
				<DatePicker
					placeholderText="End Date"
					selected={newEvent.end}
					showTimeSelect
					dateFormat="MMMM d, yyyy h:mm aa"
					onChange={(end) => setNewEvent({ ...newEvent, end: end })}
				/>
				<button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
					Add Event
				</button>
			</div>
			<div className="calendar">
				<Calendar
					localizer={localizer}
					events={allEvent}
					startAccessor="start"
					endAccessor="end"
					style={{ height: 500, margin: "50px" }}
				/>
			</div>
		</div>
	);
};

export default Home;
