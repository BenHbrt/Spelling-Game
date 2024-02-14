import './Game.scss';

import { useState } from 'react';

import Board from './Board';
import Word from './Word';

const urlBase = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Game = () => {

    const [word, setWord] = useState({word: "", contents: []});

    const handleLetterClick = (letter, selected) => {
        if (selected) {
            const newContents = [...word.contents];
            newContents.push(letter);
            let newWord = word.word;
            newWord += letter.letter;
            setWord({word: newWord, contents: newContents});
        } else {
            const index = word.contents.findIndex(char => char.id === letter.id);
            const newContents = [...word.contents];
            newContents.splice(index, 1);
            let newWord = "";
            newContents.forEach((char) => {
                newWord += char.letter;
            })
            setWord({word: newWord, contents: newContents});
        }
    }

    return (
        <div className="game">
            <Board handleLetterClick={handleLetterClick}/>
            <Word word={word} />
        </div>
    );
};

export default Game;