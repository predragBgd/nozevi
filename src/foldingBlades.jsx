import React from "react"
import foto1 from "./img/knives3.jpg"
import foto2 from "./img/lock_types/linerlock.jpg"
import foto3 from "./img/lock_types/backlock.jpg"
import foto4 from "./img/lock_types/compressionlock.jpg"
import foto5 from "./img/lock_types/buttonlock.jpg"
import foto6 from "./img/lock_types/slipjoint.jpg"
import foto7 from "./img/lock_types/axislock.jpg"

export class FoldingBldes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divStyle: "card first-img",
            type: "Home",
            img: foto1,
            imgStyle: "card-img-top",
            text: "Best blades in the world",
            textStyle: "card-text",
            buttonText: "",
            adres: "/shop"
        }
        this.linerLock = this.linerLock.bind(this)
        this.backLock = this.backLock.bind(this)
        this.compressionLock = this.compressionLock.bind(this)
        this.buttonLock = this.buttonLock.bind(this)
        this.slipJoint = this.slipJoint.bind(this)
        this.axisLock = this.axisLock.bind(this)
    }
    linerLock() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Liner lock",
                img: foto2,
                imgStyle: "col-md-4",
                text: "Shop best Liner lock knives.",
                textStyle: "col-md-8",
                buttonText: "Shop here",
                adres: "/shop"
            }
        )
    }
    backLock() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Back lock",
                img: foto3,
                imgStyle: "col-md-4",
                text: "Shop best Back lock knives.",
                textStyle: "col-md-8",
                buttonText: "Shop here",
                adres: "/shop"
            }
        )
    }
    compressionLock() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Compression lock",
                img: foto4,
                imgStyle: "col-md-4",
                text: "Shop best Compression lock knives.",
                textStyle: "col-md-8",
                buttonText: "Shop here",
                adres: "/shop"
            }
        )
    }
    buttonLock() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Button lock",
                img: foto5,
                imgStyle: "col-md-4",
                text: "Shop best Button lock knives.",
                textStyle: "col-md-8",
                buttonText: "Shop here",
                adres: "/shop"
            }
        )
    }
    slipJoint() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Slip joint",
                img: foto6,
                imgStyle: "col-md-4",
                text: "Shop best Slip joint knives.",
                textStyle: "col-md-8",
                buttonText: "Shop here",
                adres: "/shop"
            }
        )
    }
    axisLock() {
        this.setState(
            {
                divStyle: "card mb-3",
                div2Style: "row g-0",
                type: "Axis lock",
                img: foto7,
                imgStyle: "col-md-4",
                text: "Shop best Axis lock knives.",
                textStyle: "col-md-8",
                buttonText: "See more",
                adres: "/shop"
            }
        )
    }
    render() {
        return(
            <div className="card">
                <div className="buttons">
                    <button onClick={this.linerLock}>Liner lock</button>
                    <button onClick={this.backLock}>Back lock</button>
                    <button onClick={this.compressionLock}>Compression lock</button>
                    <button onClick={this.buttonLock}>Button lock</button>
                    <button onClick={this.slipJoint}>Slip joint</button>
                    <button onClick={this.axisLock}>Axis lock</button>
                </div>
                <div className={this.state.divStyle} style={{width: "100%"}}>
                    <div className={this.state.div2Style}>
                        <div className={this.state.imgStyle}>
                            <img src={this.state.img} alt="..."/>
                        </div>
                        <div className={this.state.textStyle}>
                            <div className="card-body"></div>
                            <p style={{color: "white"}} className="card-text">{this.state.text}</p>
                            <a href={this.state.adres}>{this.state.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}