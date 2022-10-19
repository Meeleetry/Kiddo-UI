import React, { useState } from 'react';
import './Game.css';

const Game = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner  ] = useState();
    

    const checkForwinner = (shquares)=> {
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[ 
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6],
            ],
        };
        for (let combo in combos){
            combos[combo].forEach((pattern) =>{
                if(
                    shquares[pattern[0]] ===''||
                    shquares[pattern[1]] ===''||
                    shquares[pattern[2]] ==='' 
                )
                {
                } else if (shquares[pattern[0]]=== shquares[pattern[1]]&&
                        shquares[pattern[1]]=== shquares[pattern[2]]
                ) {
                    setWinner(shquares[pattern[0]]);
                }
            });  
        }
    };
    const handleClick = (num) =>{
        if (cells[num] !== ''){
            alert('clicked already')
            return;
        }
        let shquares = [...cells]
        if(turn==='x'){
            shquares[num] = 'x'
            setTurn('o');
        } else{
            shquares[num] = 'o';
            setTurn('x');
        }
        checkForwinner(shquares);
        setCells(shquares);
    };
    const handleReset = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Cell = ({num})=> {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    };
  return (
  <div className='container'>
    <table>
        Play:{turn}
        <tbody>
            <tr>
                <Cell num={0}/>
                <Cell num={1}/>
                <Cell num={2}/>
            </tr>
            <tr>
                <Cell num={3}/>
                <Cell num={4}/>
                <Cell num={5}/>
            </tr>
            <tr>
                <Cell num={6}/>
                <Cell num={7}/>
                <Cell num={8}/>
            </tr>
        </tbody>
    </table>
     {winner &&(
        <>
        <p>{winner} We have our winner</p>
        <button onClick={()=> handleReset()} style={{background: 'red', color: 'white'}}>Play again</button>
        </>
    )} 
  </div>
  );

};
export default Game;