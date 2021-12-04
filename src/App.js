import {useEffect, useState} from 'react'
import styled from 'styled-components';
import './App.css';
import Caroselus from './components/Caroselus';
import { LoremIpsum } from "lorem-ipsum";
const axios = require('axios');

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
// TODO: Improve mock generator
const GenericItem = ({title, action, idx, img}) => (
  <StyledGeneric onClick={action}>
    <img src={`https://picsum.photos/id/${img}/120/120`}  alt={title}/>
    <h3>{title}</h3>
    <p>{lorems[idx]}</p>
    <span>Confira!</span>
  </StyledGeneric>
)

const mock = [
  'IBIZA',
  'SAO PAULO',
  'RIO DE JANEIRO',
  'MACEIO',
  'ALAGOAS',
  'BAHIA',
  'MINAS GERAIS',
  'NOVA YORK',
  'MANAUS',
  'ACRE',
  'WASHINGTON',
  'NEBRASKA', 'PRAIA GRANDE'
]

const lorems = mock.map(_ => lorem.generateWords(10))

const createGenerics = images => mock.map((text, idx) => <GenericItem title={text} idx={idx} img={images.length && images[idx].id}/>)

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * mock.length * 10) + 1}&limit=${mock.length}`)
      .then(res => {
        setImages(res.data)
      })
  }, [])

  console.log(images)

  return (
    <div className="App">
      <button>Botão teste 01</button><br/>
      <button>Botão teste 02</button><br/>
      <span>{lorem.generateParagraphs(1)}</span> <br/>
      <Caroselus items={createGenerics(images)} perPage={4} infinite images={images}/><br/>
      <span>{lorem.generateParagraphs(1)}</span> <br/>
      <button>Botão teste 03</button><br/>
      <button>Botão teste 04</button><br/>
    </div>
  );
}

export default App;
