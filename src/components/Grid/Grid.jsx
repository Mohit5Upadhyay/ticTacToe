import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from '../../helper/checkWinner.js';


function Grid({numberOfCards}){

    const [board,setBoard]=useState(Array(numberOfCards).fill(""))
    const [turn,setTurn]=useState(true); // true=> O ,false => X
    const [winner,setWinner]=useState(null)


    function play(index){
        if (turn == true) {
            board[index]='O'
        }else{
            board[index]='X'
        }

        const win=isWinner(board,turn ? 'O':'X')
        if (win) {
            setWinner(win)
        }

        setBoard([...board])
        setTurn(!turn);

    }

    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
    }
    
    return (

        <div className="grid-wrapper">

            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is : {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>

                )
            }

                <div className="turn">
                    <h1 className="turn-current">Current Turn : { (turn) ? 'O':'X' }</h1>
                    <h1 className="turn-previous">Previous Turn : { (!turn) ? 'O':'X' }</h1>
                </div>


                <div className="grid">
                    {board.map((el,idx)=> <Card key="idx" onPlay={play} player={el} index={idx}  gameEnd={winner ? true : false }/>)}
                </div>
        </div>

        
    );


}

export default Grid;