import React, { useEffect, useRef, useState } from "react";
import "./CSS/Add.css"
import Calculate from "./Calculation";


let Add = (props) => {
    let [show, updateShow] = useState('none')
    let [name, updateName] = useState("")
    let [number, updateNumber] = useState(0)

    let inputRef = useRef()

    useEffect(() => {
        if (show === 'block')
            inputRef?.current.focus()
    }, [show])

    let all = props.arr
    // let result = 

    return (
        <div>
            <div style={{ height: "640px" }}>
                <div className="parentInputShow" style={{ display: show, backgroundColor: 'rgb(0,0,0,0.3)' }}>
                    <div style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div className="inputShow">
                            <div className="containerOfCloseButton">
                                <div className="closeButton" onClick={() => {
                                    updateShow('none')
                                }}>X</div>
                            </div>
                            <div style={{ paddingRight: "10px", paddingLeft: "10px", paddingTop: "5px" }}>
                                <input type="text" placeholder="Name" value={name} ref={inputRef} onChange={(e) => {
                                    updateName(e.target.value)
                                }} style={{
                                    // height : "10px"
                                }} />

                                <input type="number" placeholder="Amount" value={number} onChange={(e) => {
                                    updateNumber(e.target.value)
                                }} />
                                <button onClick={() => {
                                    updateShow('none')
                                    let k = { Name: name, Amount: parseInt(number) }
                                    all.push(k)
                                    updateName('')
                                    updateNumber('')
                                    // console.log(all)
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    zIndex: 1, overflow: "scroll",
                    height: "93%",
                    overflowX: "hidden"
                }}>
                    {all.map((x, i) => {
                        return (
                            <div className="singleElementRender">
                                <div style={{ display: " flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ textDecoration: "underline" }}>{x.Name}</div> <div>{x.Amount}</div>
                                </div>
                                <div className="deleteButton" on Click={() => {
                                    console.log("CLicked remove button");
                                }}>Delete</div>
                            </div>
                        )
                    })}
                </div>

                <div className="addbutton" onClick={() => {
                    // console.log("Clicked");
                    updateShow('block')
                    // console.log(inputRef.current)
                    // inputRef.current.focus()
                }}>
                    +
                </div>
            </div>
            <div className="button" style={{ borderColor: 'red', borderWidth: 2 }} onClick={() => {

                // console.log("clciked in reuslts");
                props.updateSwitchPage(false)
                // console.log("Ti;;0 workign fine")
                // console.log("--<><><>????===>",Calculate(all))
                let k = Calculate(all)
                props.updateResultArr(k)
                // props.resultArr=[...k]
                // console.log("k is here",k)
                // console.log("---<><><>---",props.resultArr,k)
                // all.length
            }}>
                Results
            </div>
        </div>
    )
}

export default Add