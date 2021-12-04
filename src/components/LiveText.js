const LiveText = ({id, text, hidden}) => (
    <div
        id={id}
        aria-live="polite"
        aria-atomic="true"
        className={hidden ? 'visually-hidden' : ''}>
            {text}
    </div>
)

export default LiveText