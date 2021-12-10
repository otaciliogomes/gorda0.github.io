
import ListItem from "./ListItem"

const Block = ({items, currentBlock, animation}) => (
	<ListItem role="listbox" style={{ transform: `translatex(${animation}px)` }}>
		{
			items.map((item, index) => (
				<li
					id={`caroselus-item${index}-block${currentBlock}`}
					key={index}
					style={{flex: 1}}
					aria-roledescription="slide">
					{item}
				</li>
			))
		}
	</ListItem>
)

export default Block