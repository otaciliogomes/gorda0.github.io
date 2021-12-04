import styled from 'styled-components';
import './App.css';
import Caroselus from './components/Caroselus';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 4
  },
})


const StyledGeneric = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

/** MOCK */
// TODO: Improve mock generator
const GenericItem = ({title, action, idx}) => (
  <StyledGeneric onClick={action}>
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
  'NEBRASKA'
]

const lorems = mock.map(_ => lorem.generateParagraphs(1))

const createGenerics = mock.map((text, idx) => <GenericItem title={text} idx={idx} />)

function App() {
  return (
    <div className="App">
      <Caroselus items={createGenerics} perPage={3} infinite/>
    </div>
  );
}

export default App;
