import PropTypes from "prop-types"

const LiveText = ({id, text, assertive}) => (
	<div
		id={id}
		aria-live={assertive ? "assertive": "polite"}
		aria-atomic="true">
		{text}
	</div>
)

LiveText.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	assertive: PropTypes.bool
}

export default LiveText