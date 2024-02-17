import './Game.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Board from './Board';
import Word from './Word';
import Timer from './Timer';
import Control from './Control';
import Checked from './Checked';

const Game = () => {

    const [word, setWord] = useState({word: "", contents: []});
    const [correctText, setCorrectText] = useState("");

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

    useEffect(() => {
        setTimeout(() => setCorrectText(""), 2000)
    }, [correctText]);

    return (
        <div className="game">
            <Timer />
            <div className="game_main">
                <Board handleLetterClick={handleLetterClick}/>
                <div className="game_panel">
                    <Checked text={correctText}/>
                    <Word word={word} />
                    <Control word={word.word} setCorrectText={setCorrectText} />
                </div>
                
            </div>
        </div>
    );
};

export default Game;