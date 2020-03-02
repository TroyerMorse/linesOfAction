import React, {useState} from "react"
import Board from "./Board.js"
import TurnCounter from "./TurnCounter.js"
import CalculateWinner from "./CalculateWinner.js"
import History from "./History.js"

function Game(props) {
    const [positions, setPositions] = useState([
        [null, ['x', 1], ['x', 2], ['x', 3], ['x', 4], ['x', 5], ['x', 6], null],
        [['o', 1], null, null, null, null, null, null, ['o', 2]],
        [['o', 3], null, null, null, null, null, null, ['o', 4]],
        [['o', 5], null, null, null, null, null, null, ['o', 6]],
        [['o', 7], null, null, null, null, null, null, ['o', 8]],
        [['o', 9], null, null, null, null, null, null, ['o', 10]],
        [['o', 11], null, null, null, null, null, null, ['o', 12]],
        [null, ['x', 7], ['x', 8], ['x', 9], ['x', 10], ['x', 11], ['x', 12], null],])
    const [history, setHistory] =useState([
                                            [
                                                [null, ['x', 1], ['x', 2], ['x', 3], ['x', 4], ['x', 5], ['x', 6], null],
                                                [['o', 1], null, null, null, null, null, null, ['o', 2]],
                                                [['o', 3], null, null, null, null, null, null, ['o', 4]],
                                                [['o', 5], null, null, null, null, null, null, ['o', 6]],
                                                [['o', 7], null, null, null, null, null, null, ['o', 8]],
                                                [['o', 9], null, null, null, null, null, null, ['o', 10]],
                                                [['o', 11], null, null, null, null, null, null, ['o', 12]],
                                                [null, ['x', 7], ['x', 8], ['x', 9], ['x', 10], ['x', 11], ['x', 12], null]
                                            ],
                                        ])

    const [cPosition, setCPosition] = useState([])
    const [moving, setMoving] = useState(false)
    const [turn, setTurn] = useState("x")
    const [checkersTouching, setCheckersTouching] = useState([])
    const updateCPosition = (p) => {
        
            switch(moving){
                case true:
                    const value = positions[cPosition[0]][cPosition[1]][0];
                    if(value === null){
                        alert("Illegal move! You cannot move an empty space!*1*")
                    } else {
                        const clone = [...positions]
                        const xMovement = Math.abs(p[0] - cPosition[0]);
                        const yMovement = Math.abs(p[1] - cPosition[1]);
                        let checkerCountX = 0;
                        let checkerCountY = 0;
                        let yList = positions.map((q) => q[p[1]]);
                        let xList = positions[p[0]].map((w) => w);
                        yList.map((r) => r === null ? null: checkerCountY++)
                        xList.map((r) => r === null ? null: checkerCountX++)
                        var enem = '';
                        //Check movement for legality
                        if(xMovement === yMovement){
                            //Diagonal movement
                            if(xMovement > 1){
                                //Potentially jumping checkers
                                if(p[0] > cPosition[0]){
                                    //Moving Right
                                    if(p[1] > cPosition[1]){
                                        //Moving Up
                                        for(let mrChecky1 = 1; mrChecky1 < xMovement ; mrChecky1++ ){
                                            enem = clone[(p[0]-mrChecky1)][p[1]-mrChecky1]
                                            if(enem === value | enem === null){
                                                //Legal due to jumping friendly
                                                if(checkerCountY === xMovement | checkerCountX === xMovement){
                                                    if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                        //Friendly fire check
                                                        alert("Illegal move! Friendly Fire!*2*")
                                                    }else {
                                                        //Legal move
                                                        clone[p[0]][p[1]] = value;
                                                        clone[cPosition[0]][cPosition[1]] = null;
                                                        setTurn(turn => turn === 'x'? 'o':'x');
                                                        CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                                    }
                                                }else {
                                                    //Movement amount and checker count are not the same
                                                    alert("Illegal move! Movement amount and checker count must be the same. Try again*3*")
                                                }
                                            } else{
                                                //Attempted to jump over enemy checker
                                                alert("Illegal move! Cannot jump enemy checkers. Try again*4*")
                                            }
                                    }
                                    //Moving Down
                                    } if(p[1] < cPosition[1]){
                                        for(let mrChecky2 = 1; mrChecky2 < xMovement; mrChecky2++){
                                            enem = clone[(p[0]-mrChecky2)][p[1]+mrChecky2]
                                            if(enem === value | enem === null){
                                                //Legal due to jumping friendly or nothing
                                                if(checkerCountY === xMovement | checkerCountX === xMovement){
                                                    if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                        //Friendly fire check
                                                        alert("Illegal move! Friendly Fire!*5*")
                                                    }else {
                                                        //Legal move
                                                    clone[p[0]][p[1]] = value;
                                                    clone[cPosition[0]][cPosition[1]] = null;
                                                    setTurn(turn => turn === 'x'? 'o':'x');
                                                    CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                                    }
                                                }else {
                                                    //Movement amount and checker count are not the same
                                                    alert("Illegal move! Movement amount and checker count must be the same. Try again*6*")
                                                }
                                            } else {
                                                //Attempted to jump over enemy checker
                                                alert("Illegal move! Cannot jump enemy checkers. Try again*7*")
                                            }
                                        }
                                    }
                                } else if(p[0] < cPosition[0]){
                                    //Moving Left
                                    if(p[1] > cPosition[1]){
                                        //Moving Up
                                        for(let mrChecky3 = 1; mrChecky3 < xMovement; mrChecky3++)
                                        enem = clone[(p[0]+mrChecky3)][p[1]-mrChecky3]
                                        if(enem === value | enem === null){
                                            //Legal due to jumping friendly
                                            if(checkerCountY === xMovement | checkerCountX === xMovement){
                                                if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                    //Friendly fire check
                                                    alert("Illegal move! Friendly Fire!*8*")
                                                }else {
                                                    //Legal move
                                                clone[p[0]][p[1]] = value;
                                                clone[cPosition[0]][cPosition[1]] = null;
                                                setTurn(turn => turn === 'x'? 'o':'x');
                                                CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                                }
                                            }else {
                                                //Movement amount and checker count are not the same
                                                alert("Illegal move! Movement amount and checker count must be the same. Try again*9*")
                                            }
                                        } else{
                                            //Attempted to jump over enemy checker
                                            alert("Illegal move! Cannot jump enemy checkers. Try again*10*")
                                        }
                                    //Moving Down
                                    } if(p[1] < cPosition[1]){
                                        for(let mrChecky4 = 1; mrChecky4 < xMovement; mrChecky4++){
                                            enem = clone[(p[0]+mrChecky4)][p[1]+mrChecky4]
                                            if(enem === value | enem === null){
                                                //Legal due to jumping friendly
                                                if(checkerCountY === xMovement | checkerCountX === xMovement){
                                                    if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                        //Friendly fire check
                                                        alert("Illegal move! Friendly Fire!*11*")
                                                    }else {
                                                        //Legal move
                                                    clone[p[0]][p[1]] = value;
                                                    clone[cPosition[0]][cPosition[1]] = null;
                                                    setTurn(turn => turn === 'x'? 'o':'x');
                                                    CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                                    setHistory((prev) => prev.concat([clone]));
                                                    ;

                                                    }
                                                }else {
                                                    //Movement amount and checker count are not the same
                                                    alert("Illegal move! Movement amount and checker count must be the same. Try again*12*")
                                                }
                                            } else {
                                                //Attempted to jump over enemy checker
                                                alert("Illegal move! Cannot jump enemy checkers. Try again*13*")
                                            }
                                        }
                                    }

                                }
                            } else {
                                if(checkerCountY === xMovement | checkerCountX === xMovement){
                                    if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                        //Friendly fire check
                                        alert("Illegal move! Friendly Fire!*14*")
                                    }else {
                                        //Legal move
                                    clone[p[0]][p[1]] = value;
                                    clone[cPosition[0]][cPosition[1]] = null;
                                    setTurn(turn => turn === 'x'? 'o':'x');
                                    CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                    
                                    
                                        


                                    }
                                }else {
                                    //Movement amount and checker count are not the same
                                    alert("Illegal move! Movement amount and checker count must be the same. Try again*15*")
                                }
                            }
                        } else if(xMovement === 0){
                            //Vertical movement
                            if(yMovement > 1){
                                //Potential jump of checkers
                                if(p[1] > cPosition[1]){
                                    //Moving Up
                                    let weCheck =[];
                                    for(let mrChecky5 = 1; mrChecky5 < yMovement; mrChecky5++){
                                        enem = enem = clone[(p[0])][p[1]-mrChecky5]
                                        if(enem === value | enem === null){
                                            //Jumping friendly or nothing
                                            weCheck.push(true)
                                        }
                                    }
                                        if(weCheck.every(()=> true)){
                                            if(yMovement === checkerCountY | yMovement === checkerCountX){
                                                //Check both directions for checker count
                                                if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                    //Friendly fire
                                                    alert("Illegal move! Friendly Fire!*16*")
                                                } else {
                                                    //Legal move
                                                    clone[p[0]][p[1]] = value;
                                                    clone[cPosition[0]][cPosition[1]] = null;
                                                    setTurn(turn => turn === 'x'? 'o':'x');
                                                    CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                                    
                                                    
                                                    

                                                }
                                            } else {
                                                //Movement amount and checker count are not the same
                                                alert("Illegal move! Movement amount and checker count must be the same. Try again*17*")
                                            }
                                        } else {
                                            //Jumping enemy checkers
                                            alert("Illegal move! You cannot jump enemy checkers. Try again*18*")
                                        }
                                    
                                } else if(p[1] < cPosition[1]){
                                    //Moving Down
                                    for(let mrChecky6 = 1; mrChecky6 < yMovement; mrChecky6++){
                                        enem = enem = clone[(p[0])][p[1]+mrChecky6]
                                        if(enem === value | enem === null){
                                            //Jumping friendly or nothing
                                            if(yMovement === checkerCountY | yMovement === checkerCountX){
                                                //Check both directions for checker count
                                                if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                    //Friendly fire
                                                    alert("Illegal move! Friendly Fire!*19*")
                                                } else {
                                                    //Legal move
                                                clone[p[0]][p[1]] = value;
                                                clone[cPosition[0]][cPosition[1]] = null;
                                                setTurn(turn => turn === 'x'? 'o':'x');
                                                CalculateWinner(positions, cPosition, p, turn, checkersTouching);

                                                
                                                
                                        
                                                ;



                                                }
                                            } else {
                                                //Movement amount and checker count are not the same
                                                alert("Illegal move! Movement amount and checker count must be the same. Try again*20*")
                                            }
                                        } else {
                                            //Jumping enemy checkers
                                            alert("Illegal move! You cannot jump enemy checkers. Try again*21*")
                                        }
                                    }
                                } 
                            } else {
                                    if(yMovement === checkerCountY | yMovement === checkerCountX){
                                        //Check both directions for checker count
                                        if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                            //Friendly fire
                                            alert("Illegal move! Friendly Fire!*22*")
                                        } else {
                                            //Legal move
                                        clone[p[0]][p[1]] = value;
                                        clone[cPosition[0]][cPosition[1]] = null;
                                        setTurn(turn => turn === 'x'? 'o':'x');
                                        CalculateWinner(positions, cPosition, p, turn, checkersTouching);

                                        
                                        
                                            
                                        ;



                                        }
                                    } else {
                                        //Movement amount and checker count are not the same
                                        alert("Illegal move! Movement amount and checker count must be the same. Try again*23*")
                                    }
                                }
                                
                                
                        } else if(yMovement === 0){
                            //Lateral movement
                            if(xMovement > 1){
                                //Potential jump of checkers
                                if(p[0] > cPosition[0]){
                                    //Moving Right
                                    for(let mrChecky7 = 1; mrChecky7 < xMovement; mrChecky7++){
                                        enem = enem = clone[(p[0]-mrChecky7)][p[1]]
                                        if(enem === value | enem === null){
                                            //Jumping friendly or nothing
                                            if(xMovement === checkerCountY | xMovement === checkerCountX){
                                                //Check both directions for checker count
                                                if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                    //Friendly fire
                                                    alert("Illegal move! Friendly Fire!*24*")
                                                } else {
                                                    //Legal move
                                                clone[p[0]][p[1]] = value;
                                                clone[cPosition[0]][cPosition[1]] = null;
                                                setTurn(turn => turn === 'x'? 'o':'x');
                                                CalculateWinner(positions, cPosition, p, turn, checkersTouching);

                                                
                                                
                                                    
                                                ;



                                                }
                                            } else {
                                                //Movement amount and checker count are not the same
                                                alert("Illegal move! Movement amount and checker count must be the same. Try again*25*")
                                            }
                                        } else {
                                            //Jumping enemy checkers
                                            alert("Illegal move! You cannot jump enemy checkers. Try again*26*")
                                        }
                                    }
                                } else if(p[0] < cPosition[0]){
                                    //Moving Left
                                    for(let mrChecky8 = 1; mrChecky8 < xMovement; mrChecky8++){
                                        enem = enem = clone[(p[0]+mrChecky8)][p[1]]
                                        if(enem === value | enem === null){
                                            //Jumping friendly or nothing
                                            if(xMovement === checkerCountY | xMovement === checkerCountX){
                                                //Check both directions for checker count
                                                if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                                    //Friendly fire
                                                    alert("Illegal move! Friendly Fire!*27*")
                                                } else {
                                                    //Legal move
                                                clone[p[0]][p[1]] = value;
                                                clone[cPosition[0]][cPosition[1]] = null;
                                                setTurn(turn => turn === 'x'? 'o':'x');
                                                CalculateWinner(positions, cPosition, p, turn, checkersTouching);

                                                }
                                            } else {
                                                //Movement amount and checker count are not the same
                                                alert("Illegal move! Movement amount and checker count must be the same. Try again*28*")
                                            }
                                        } else {
                                            //Jumping enemy checkers
                                            alert("Illegal move! You cannot jump enemy checkers. Try again*29*")
                                        }
                                    }
                                }
                            } else {
                                if(yMovement === checkerCountY | yMovement === checkerCountX){
                                    //Check both directions for checker count
                                    if(clone[p[0]][p[1]] === clone[cPosition[0]][cPosition[1]]){
                                        //Friendly fire
                                        alert("Illegal move! Friendly Fire!*30*")
                                    } else {
                                        //Legal move
                                    clone[p[0]][p[1]] = value;
                                    clone[cPosition[0]][cPosition[1]] = null;
                                    setTurn(turn => turn === 'x'? 'o':'x');
                                    CalculateWinner(positions, cPosition, p, turn, checkersTouching);
                                    }
                                } else {
                                    //Movement amount and checker count are not the same
                                    alert("Illegal move! Movement amount and checker count must be the same. Try again*31*")
                                }
                            }
                            

                        } else {
                            //Not a direct line of movement thus illegal
                            alert("Illegal move! Movement must be in a straight line. Try again*32*")
                        }

                    }
                    //setHistory((prev) =>{ 
                    //    console.log(prev);
                    //    prev.concat([positions]);
                    //    console.log(prev)
                    //}
                    //    );
                    setMoving(false)
                    break;
                case false: 
                    setCPosition(p)
                    setMoving(true)
                    break;
                
            }
            
    }

    //<History setPositions={setPositions} positions={positions} history={history} setHistory={setHistory}/>
    

    return (
        <div >
            <h1 className="loalogo">Welcome to {props.user.value}'s game of Lines of Action!</h1>
            <Board className="game" positions={positions} updateCPosition={updateCPosition}/>
            <TurnCounter turn={turn}/>
            {turn === "x" ? <h1 className="background">{turn}</h1>: <h1 className="background2">{turn}</h1>}
        </div>   
    )
}

export default Game