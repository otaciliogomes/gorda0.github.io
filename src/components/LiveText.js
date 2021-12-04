const LiveText = ({id, text, hidden, assertive}) => (
    <div
        id={id}
        aria-live={assertive ? "assertive": "polite"}
        aria-atomic="true"
        className={hidden ? 'visually-hidden' : ''}>
            {text}
    </div>
)

export default LiveText