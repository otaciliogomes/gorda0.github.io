import ListItem from "./ListItem"

const Block = ({items, currentBlock}) => (
        <ListItem>
            {
                items.map((item, index) => (
                    <li
                        id={`caroselus-item${index}-block${currentBlock}`}
                        key={index}
                        style={{flex: 1}}
                        >
                        {item}
                    </li>
                ))
            }
        </ListItem>
)

export default Block