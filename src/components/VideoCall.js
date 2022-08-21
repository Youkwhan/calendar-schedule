import "./VideoCall.css";

export default function VideoCall(props) {
	return (
		<div>
			<h1 className="video-title">VideoCall</h1>
			<iframe
				id="full-size"
				src="https://youkwhan.whereby.com/youk4ffcfb09-4445-42ba-9502-425cd06178d2"
				allow="camera; microphone; fullscreen; speaker; display-capture"
			></iframe>
		</div>
	);
}

// ROOM CODE: https://youkwhan.whereby.com/youk4ffcfb09-4445-42ba-9502-425cd06178d2
