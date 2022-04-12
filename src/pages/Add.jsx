import React, { useState } from "react";
import "./Add.css"
import Calculate from "./Calculation";

let all = [{Name: 'Ankit', Amount: '789'},{Name: 'Narayan', Amount: '365'}]

let Add = (props) => {
    let [show,updateShow]=useState('none')
    let [name,updateName]=useState("")
    let [number,updateNumber]=useState(0)

    return(
        <div className="add">

            <div className="parentInputShow" style={{display : show}}>
                <div style={{height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"}}>
                    <div  className="inputShow">
                        <div className="closeButton" onClick={()=>{
                            updateShow('none')
                        }}>X</div>
                        <div>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => {
                                updateName(e.target.value)
                            }} />
                            <input type="number" placeholder="Amount" value={number} onChange={(e) => {
                                updateNumber(e.target.value)
                            }}/>
                            <button onClick={() => {
                                updateShow('none')
                                let k ={Name : name, Amount : number}
                                all.push(k)
                                updateName('')
                                updateNumber('')
                                console.log(all)
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{zIndex : 1,overflow: "scroll",
                        height: "93%",
                        overflowX: "hidden"}}>
            {all.map((x,i)=>{
                return(
                    <div className="singleElementRender">
                        <div style={{display:" flex",justifyContent: "space-between", width: "100%"}}>
                            <div style={{textDecoration : "underline"}}>{x.Name}</div> <div>{x.Amount}</div>
                        </div>
                        <div className="deleteButton" onPress = {()=> {
                            console.log("CLicked remove button");
                        }}>Delete</div>
                    </div>
                )
            })}
            </div>

            <div className="button" onClick={() => {
                Calculate(all)
                // all.length
            }}>
                Results
            </div>
            <div className="addbutton" onClick={() => {
                // console.log("Clicked");
                updateShow('block')
            }}>
                +
            </div>
        </div>
    )
}

export default Add