import {useState} from 'react'
import styled from 'styled-components'
import DotBar from './DotBar'
import Block from './Block'
import VisuallyHidden from './VisuallyHidden'
import LiveText from './LiveText'
import {paginate, keysMiddleware} from '../utils'
/**
    TO-DO:
    TODO: implement animation
    TODO: add styles
*/

const StyledCaroselus = styled.div`
    display: flex;
    flex-direction: column;
    &:focus {
        outline: none;
    }

    & div {
        border: 1px solid #ccc;
    }

    & .inverser {
        display: flex;
        flex-direction: row-reverse;
    }
`
const Caroselus = ({items, perPage, infinite}) => {
    const [currentBlock, setCurrentBlock] = useState(0)
    const [currentItem, setCurrentItem] = useState(null)
    const [animation, setAnimation] = useState(true) // TODO: implement animation
    const [infiniteMode, setInfiniteMode] = useState(infinite || false)

    /** BLOCK SETTINGS */
    const blocks = paginate(items, perPage)
    const blockLength = blocks.length

    /** CONTROL HANDLERS */
    const isIncreaseInactive = !infiniteMode && currentBlock === blockLength - 1
    const isDecreaseInactive = !infiniteMode && currentBlock === 0

    const focusOnItem = async (itemIdx, blockIdx) => {
        await setCurrentBlock(blockIdx)
        await document
            .getElementById(`caroselus-item${itemIdx}-block${blockIdx}`)
            .firstElementChild
            .focus()
        await setCurrentItem(itemIdx)
    }

    const setAndMove = async blockIdx => {
        if(currentBlock === blockIdx) return

        await focusOnItem(0, blockIdx)
    }

    const increaseBlock = () => {
        return currentBlock < blockLength - 1
            ? setAndMove(currentBlock + 1)
            : infiniteMode
                ? setAndMove(0)
                : null
    }

    const decreaseBlock = () => {
        return currentBlock > 0
            ? setAndMove(currentBlock - 1)
            : infiniteMode
                ? setAndMove(blockLength - 1)
                : null
            }

    const increaseItem = () => {
        const nextItem = currentItem + 1
        const nextBlock = currentBlock + 1

        if(currentItem == null) setCurrentItem(0)
        else if (currentItem === blocks[currentBlock].length - 1) {
            if(currentBlock === blockLength - 1)
                if(infiniteMode) focusOnItem(0, 0)
                else return
            else focusOnItem(0, nextBlock)

            setCurrentItem(0)
        } else {
            setCurrentItem(nextItem)
            focusOnItem(nextItem, currentBlock)
        }
    }

    const decreaseItem = () => {
        if(currentItem == null) setCurrentItem(0)
        else if (currentItem === 0) {
            if(currentBlock === 0)
                if(infiniteMode) focusOnItem(blocks[blockLength - 1].length - 1, blockLength - 1)
                else return
            else focusOnItem(blocks[currentBlock].length - 1, currentBlock - 1)

            setCurrentItem(blocks[currentBlock].length - 1)
        } else {
            setCurrentItem(currentItem - 1)
            focusOnItem(currentItem - 1, currentBlock)
        }
    }

    const toggleAnimation = () => setAnimation(!animation)
    const toggleInfinite = () => setInfiniteMode(!infiniteMode)
    const handleHelp = () => alert("help modal") // TODO: implement help modal

    const keys = {
        37: decreaseBlock,
        38: increaseItem,
        39: increaseBlock,
        40: decreaseItem,
        65: toggleAnimation,
        73: toggleInfinite,
        191: handleHelp,
    }

    const handleKeyDown = (e) =>
        e.keyCode in keys
        ? keysMiddleware(e, keys[e.keyCode])
        : null

    return (
        <StyledCaroselus tabIndex={0} onKeyDown={handleKeyDown} id="caroselus" aria-labelledby="caroselus-label">
            <VisuallyHidden>
                <span id="caroselus-label">Carrossel vitrine de promoções</span>
                <LiveText text={`Página ${currentBlock + 1} de ${blockLength}`}/>
                <LiveText text={`Item ${currentItem + 1} de ${blocks[currentBlock].length}`}/>
                <LiveText assertive text={`Apresentação infinita ${infiniteMode ? 'ativada' : 'desativada'}`} />
                <LiveText assertive text={`Animações ${animation ? 'ativada' : 'desativada'}`} />
            </VisuallyHidden>
            <div id="caroselus-presentation-bar" className="inverser">
                <div>
                    <button onClick={toggleInfinite}>
                        {`${infiniteMode ? "Desabilitar" : "Habilitar"} apresentação infinita` /* TODO: i18n*/}
                    </button>
                    <button onClick={toggleAnimation}>
                        {`${animation ? "Desabilitar" : "Habilitar"} animações` /* TODO: i18n*/}
                    </button>
                </div>
            </div>
            <div id="caroselus-content">
                <Block items={blocks[currentBlock]} currentBlock={currentBlock}/>
            </div>
            <div id="caroselus-controls">
                <button onClick={decreaseBlock} disabled={isDecreaseInactive}>Anterior</button>
                <button onClick={increaseBlock} disabled={isIncreaseInactive}>Próximo</button>
            </div>
            <div id="caroselus-bar">
                <DotBar range={blockLength} onClick={setAndMove} currentIndex={currentBlock}/>
            </div>
            <div id="caroselus-help" className="inverser">
                <button onClick={handleHelp}>Ajuda</button>
            </div>
        </StyledCaroselus>
    )
    }

export default Caroselus