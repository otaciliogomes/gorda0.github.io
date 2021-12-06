import styled from "styled-components"
import VisuallyHidden from "../VisuallyHidden"
import ListItem from "./ListItem"

const Dot = styled.button`
    color: ${props => props.active ? "red" : "black"}

    ${props => props.active && `
        border: 1px solid #999999;
        background-color: #cccccc;
    `}
`

const DotBar = ({currentIndex, range, onClick}) => (
	<ListItem aria-label="Paginação do carrossel">
		{
			new Array(range).fill(0).map((_, index) => {
				const isActive = index === currentIndex
				return (
					<li key={index}>
						<Dot
							active={isActive}
							aria-disabled={isActive}
							key={index}
							className={
								isActive
									? "caroselus-active-dot current"
									: "caroselus-inactive-dot"
							}
							onClick={() => onClick(index)}
							data-slide={index}>
							<VisuallyHidden>Página </VisuallyHidden>
							{index + 1}
							<VisuallyHidden>{isActive ? " selecionada." : " aperte para selecionar"}</VisuallyHidden>
						</Dot>
					</li>
				)
			})
		}
	</ListItem>
)

export default DotBar