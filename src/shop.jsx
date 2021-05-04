import React from "react"
import { foldingKnives } from "./foldingBladesData"

const buttons = [
    { name: "Liner lock", value: "Liner"},
    { name: "Back lock", value: "Back"},
    { name: "Compression lock", value: "Compression"},
    { name: "Button lock", value: "Button"},
    { name: "Slip joint", value: "Slip"},
    { name: "Axis lock", value: "Axis"}
]
export class ShopFoldingBlades extends React.Component {
    constructor() {
        super()
        this.state = {
            foldingKnives,
            filterFoldingKnives: []
        }
    }
    // componentDidMount() {
    //     this.setState({
    //         filterFoldingKnive: this.state.foldingKnivesß
    //     })
    // }
    handleClick = name => {
        let filterFoldingKnives = []
        filterFoldingKnives = this.state.foldingKnives.filter(
            foldingKnive => foldingKnive.type === name 
        ) 
        this.setState({filterFoldingKnives})   
    }
    render() {
        const renderAll = this.state.filterFoldingKnives.map(foldingKnive => (
                foldingKnive.products.map(product => (
                <div style={{width: "18rem", background: "white",color: "black"}} className="card"  key={foldingKnive.name}>
                    <h5>{product.name}</h5>
                    <img src={product.img} alt=""/>
                    <h5>{foldingKnive.type}</h5>
                    <p>{product.description}</p>
                </div>
                ))
        ))
        
        return(
            <div className="card">
                <div className="buttons">
                    {buttons.map(({name, value}) => (
                        <button
                            key={name}
                            value={value}
                            onClick={this.handleClick.bind(this, name)}
                        >{name}</button>
                    ))}
                </div>    
                <div>
                    <div className="container" style={{display: "flex", flexWrap: "wrap", background: "white",color: "black"}}>  {renderAll}
                    </div>
                </div>
            </div>
        )
    }
}