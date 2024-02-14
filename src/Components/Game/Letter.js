import { useState } from 'react';

const Letter = ({letter, handleLetterClick}) => {

    const [selected, setSelected] = useState(false)

    const clickHandle = () => {
        handleLetterClick(letter, !selected)
        setSelected(!selected)
        
    }

    return (
        <div className={`letter ${selected ? 'selected' : null}`} onClick={clickHandle}>
            <span>{letter.letter} <span>{letter.points}</span></span>
        </div>
    );
};

export default Letter;