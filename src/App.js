import {useEffect, useState} from "react"
import styled from "styled-components"
import "./App.css"
import Caroselus from "./components/Caroselus"
import { LoremIpsum } from "lorem-ipsum"
import axios from "axios"

const randomValue = from => Math.floor(Math.random() * from * 10) + 1
const getPicsumList = len => `https://picsum.photos/v2/list?page=${randomValue(len)}&limit=${len}`
const getPicsum = id => `https://picsum.photos/id/${id}/120/120`

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 4,
		min: 4,
	},
})


const StyledGeneric = styled.button`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%
`

/** MOCK */
const GenericItem = ({title, action, idx, imgId}) => (
	<StyledGeneric onClick={action}>
		<img src={getPicsum(imgId)}  alt="" />
		<strong>{title}</strong>
		<p>{lorems[idx]}</p>
		<span>Confira!</span>
	</StyledGeneric>
)

const mock = [
	"IBIZA",
	"SAO PAULO",
	"RIO DE JANEIRO",
	"MACEIO",
	"ALAGOAS",
	"BAHIA",
	"MINAS GERAIS",
	"NOVA YORK",
	"MANAUS",
	"ACRE",
	"WASHINGTON",
	"NEBRASKA", "PRAIA GRANDE"
]

const lorems = mock.map(() => lorem.generateWords(10))

const createGenerics = images =>
	mock.map((text, idx) =>
		<GenericItem
			key={idx}
			title={text}
			idx={idx}
			imgId={images.length && images[idx].id}
		/>
	)

function App() {
	const [images, setImages] = useState([])

	useEffect(() => {
		axios.get(getPicsumList(mock.length))
			.then(res => {
				setImages(res.data)
			})
	}, [])

	return (
		<div className="App">
			<h1>POC Carrossel</h1>
			<button>Botão teste 01</button><br/>
			<button>Botão teste 02</button><br/>
			<span>{lorem.generateParagraphs(1)}</span> <br/>
			<Caroselus
				items={createGenerics(images)}
				perPage={4}
				infinite/>
			<br/>
			<span>{lorem.generateParagraphs(1)}</span> <br/>
			<button>Botão teste 03</button><br/>
			<button>Botão teste 04</button><br/>
		</div>
	)
}

export default App
