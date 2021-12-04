import {useState} from 'react'
import styled from 'styled-components'
import DotBar from './DotBar'
import Block from './Block'
import VisuallyHidden from './VisuallyHidden'
import LiveText from './LiveText'

const StyledCaroselus = styled.div`
    display: flex;
    flex-direction: column;
    &:focus {
        outline: none;
    }

    & div {
        flex: 1;
        border: 1px solid #ccc;
        align-items: center;
        text-align: center;
    }

    & .inverser {
        display: flex;
        flex-direction: row-reverse;
    }
`
const Caroselus = ({items, perPage, infinite}) => {
    const [currentBlock, setCurrentBlock] = useState(0)
    const [currentItem, setCurrentItem] = useState(0)
    const [animation, setAnimation] = useState(true)

    /** BLOCK SETTINGS */
    const totalBlocks = Math.ceil(items.length / perPage)
    const blocks = items.reduce(
        (acc, _, index) => {
            if (index % perPage === 0)
                acc.push(items.slice(index, index + perPage))

            return acc
        },
        []
    )

    /** CONTROL HANDLERS */
    const isIncreaseInactive = !infinite && currentBlock === totalBlocks - 1
    const isDecreaseInactive = !infinite && currentBlock === 0

    const stopKeys = e => {
        e.preventDefault()
        e.stopPropagation()
    }
    const increaseBlock = (e) => {
        stopKeys(e)
        currentBlock < blocks.length - 1
            ? setAndMove(currentBlock + 1)
            : setAndMove(0)
    }

    const decreaseBlock = (e) => {
        stopKeys(e)
        currentBlock > 0
            ? setAndMove(currentBlock - 1)
            : setAndMove(blocks.length - 1)
    }

    const focusOnItem = async (itemIdx, blockIdx) => {
        await setCurrentBlock(blockIdx)
        const el = document.getElementById(`caroselus-item${itemIdx}-block${blockIdx}`)
        await el.firstElementChild.focus()
    }

    const setAndMove = async blockIdx => {
        if(currentBlock === blockIdx) return

        await focusOnItem(0, blockIdx)
    }

    const increaseItem = (e) => {
        stopKeys(e)
        if (currentItem === blocks[currentBlock].length - 1) {
            if (infinite) {
                if(currentBlock === totalBlocks - 1) {
                    focusOnItem(0, 0)
                } else {
                    focusOnItem(0, currentBlock + 1)
                }
                setCurrentItem(0)
            } else {
                setCurrentItem(blocks[currentBlock].length - 1)
            }
        } else {
            setCurrentItem(currentItem + 1)
            focusOnItem(currentItem + 1, currentBlock)
        }
    }

    const decreaseItem = (e) => {
        stopKeys(e)
        if (currentItem === 0) {
            if (infinite) {
                if(currentBlock === 0)
                    focusOnItem(blocks[totalBlocks - 1].length - 1, totalBlocks - 1)
                else
                    focusOnItem(blocks[currentBlock].length - 1, currentBlock - 1)

                setCurrentItem(blocks[currentBlock].length - 1)
            } else {
                setCurrentItem(0)
            }
        } else {
            setCurrentItem(currentItem - 1)
            focusOnItem(currentItem - 1, currentBlock)
        }
    }

    const handleKeyDown = (e) => {
        return e.keyCode === 37 // left
            ? decreaseBlock(e)
            : e.keyCode === 39 // right
                ? increaseBlock(e)
                : e.keyCode === 38 // up
                    ? increaseItem(e)
                    : e.keyCode === 40 // down
                        ? decreaseItem(e)
                        : e.keyCode === 191 // interrogation
                            ? handleHelp()
                            : null
    }

    const toggleAnimation = () => setAnimation(!animation)
    const handleHelp = () => alert("help modal")
    return (
        <StyledCaroselus tabIndex={-1} onKeyDown={handleKeyDown} id="caroselus" aria-labelledby="#caroselus-label">
            <VisuallyHidden>
                <span id="caroselus-label">Carrossel vitrine de promoções</span>
                <LiveText text={` Página ${currentBlock + 1} de ${blocks.length}`}/>
            </VisuallyHidden>
            <div id="caroselus-animation-bar" className="inverser">
                <button onClick={toggleAnimation}>
                    {`${animation ? "Desabilitar" : "Habilitar"} animações`}
                </button>
            </div>
            <div id="caroselus-content">
                <Block items={blocks[currentBlock]} currentBlock={currentBlock}/>
            </div>
            <div id="caroselus-controls">
                <button onClick={decreaseBlock} disabled={isDecreaseInactive}>Anterior</button>
                <button onClick={increaseBlock} disabled={isIncreaseInactive}>Próximo</button>
            </div>
            <div id="caroselus-bar">
                <DotBar range={totalBlocks} onClick={setAndMove} currentIndex={currentBlock}/>
            </div>
            <div id="caroselus-help" className="inverser">
                <button onClick={handleHelp}>Ajuda</button>
            </div>
        </StyledCaroselus>
    )
    }

export default Caroselus