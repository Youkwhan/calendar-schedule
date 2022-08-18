import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

//THE MONTHS ARE COUNTED STARTING FROM 0
const events = [
	{
		title: "Big Meeting",
		allDay: true,
		start: new Date(2022, 8, 0),
		end: new Date(2022, 8, 0),
	},
	{
		title: "Vacation",
		start: new Date(2022, 7, 17),
		end: new Date(2022, 7, 17),
	},
];

const Home = () => {
	const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
	const [allEvent, setAllEvent] = useState(events);

	const handleAddEvent = () => {
		// push the new event to the allEvent array
		setAllEvent([...allEvent, newEvent]);
	};

	return (
		<div>
			<h1>Calendar</h1>
			<h2>Add New Event</h2>
			<div>
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
					onChange={(start) => setNewEvent({ ...newEvent, start: start })}
				/>
				<DatePicker
					placeholderText="End Date"
					selected={newEvent.end}
					onChange={(end) => setNewEvent({ ...newEvent, end: end })}
				/>
				<button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
					Add Event
				</button>
			</div>
			<Calendar
				localizer={localizer}
				events={allEvent}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500, margin: "50px" }}
			/>
		</div>
	);
};

export default Home;
