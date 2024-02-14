import { letters } from '../../data/Letters';

const Board = () => {
    return (
        <div className="board">
            {
                letters.map((letter,i) => {
                    return  <div className="board_letter" key={i}>
                                <span>{letter.letter} <span>{letter.points}</span></span>
                            </div>
                })
            }
        </div>
    );
};

export default Board;