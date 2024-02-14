import { letters } from '../../data/Letters';

import Letter from './Letter';

const Board = ({handleLetterClick}) => {
    return (
        <div className="board">
            {
                letters.map((letter,i) => {
                    return <Letter key={i} letter={letter} handleLetterClick={handleLetterClick} />
                })
            }
        </div>
    );
};

export default Board;