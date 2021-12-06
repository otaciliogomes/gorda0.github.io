
import ListItem from "./ListItem"

const Block = ({items, currentBlock}) => (
	<ListItem role="listbox">
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