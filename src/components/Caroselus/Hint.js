import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import {FiX} from "react-icons/fi";

const Hint = ({
    hint,
    toggleHint,
    enterHintLabel,
    sideArrowsHintLabel,
    updownArrowsHintLabel,
    infiniteHintLabel,
    animationHintLabel,
    hintLabel,
    hintTitle,
}) => (
    <Dialog onClose={toggleHint} open={hint}>
		<DialogTitle>{hintTitle}</DialogTitle>
        <Box>
            <ul>
                <li>
                    <div>
                        <span role="img" aria-label="Tecla Enter,">↵</span>
                    </div>
                    <div>{enterHintLabel}</div>
                </li>
                <li>
                    <div>
                        <span role="img" aria-label="Teclas de seta direita e esquerda,">←/→</span>
                    </div>
                    <div>{sideArrowsHintLabel}</div>
                </li>
                <li>
                    <div>
                        <span role="img" aria-label="Setas para cima e para baixo,">↑/↓</span>
                    </div>
                    <div>{updownArrowsHintLabel}</div>
                </li>
                <li>
                    <div>
                        <span role="img" aria-label="Tecla I,">I</span>
                    </div>
                    <div>{infiniteHintLabel}</div>
                </li>
                <li>
                    <div>
                        <span role="img" aria-label="Tecla A,">A</span>
                    </div>
                    <div>{animationHintLabel}</div>
                </li>
                <li>
                    <div>
                        <span role="img" aria-label="Ponto de interrogação,">?</span>
                    </div>
                    <div>{hintLabel}</div>
                </li>
            </ul>
        </Box>
        <IconButton
            aria-label="close"
            onClick={toggleHint}
            style={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: "black",
            }}
            >
            <FiX />
        </IconButton>
    </Dialog>
)

export default Hint