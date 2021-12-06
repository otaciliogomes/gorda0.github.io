const LiveText = ({id, text, assertive}) => (
	<div
		id={id}
		aria-live={assertive ? "assertive": "polite"}
		aria-atomic="true">
		{text}
	</div>
)

export default LiveText