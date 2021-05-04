import React from "react"
import { knives } from "./fixedKnivesData"

const buttons = [
    {name: "All", value: "All"},
    {name: "Normal blade", value: "Normal"},
    {name: "Drop point blade", value: "Drop"},
    {name: "Clip point blade", value: "Clip"},
    {name: "Tanto blade", value: "Tanto"}
]
export class FixedBlades extends React.Component {
    constructor() {
        super();
        this.state = {
            knives,
            filterKnive: []
        }
    }
    componentDidMount() {
        this.setState({
            filterKnive: this.state.knives
        })
    }
    handleClick = name => {
        let filterKnive = []
        if(name === "All") {
            filterKnive = this.state.knives
        } else {
            filterKnive = this.state.knives.filter(
                knive => knive.type === name
            )
        }
        this.setState({filterKnive})
    }
    render() {
        const renderAll = this.state.filterKnive.map(knive => (
            <div style={{width: "18rem", background: "white",color: "black"}} className="card" key={knive.name}>
                <h5>{knive.name}</h5>
                <img src={knive.img} alt=""/>
                <h5>{knive.type}</h5>
                <p>{knive.description}</p>
            </div>
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
                    <div className="container" style={{display: "flex", flexWrap: "wrap", background: "white",color: "black"}}>{renderAll}</div>
                </div>
            </div>
        )
    }
}