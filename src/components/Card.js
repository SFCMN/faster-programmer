import React, {Component} from 'react';
import './Card.css';
import {Image} from "antd";

class Card extends Component {
    displayBorder = (event) => {
        if (this.props.enableBorder !== false) {
            event.target.style.border = "solid 1px gray";
            event.target.style.borderRadius = "5px";
        }
    };

    removeBorder = (event) => {
        if (this.props.enableBorder !== false) {
            event.target.style.border = "none";
        }
    };

    render() {
        return (
            <div
                className="mdc-card"
                onMouseOver={this.displayBorder}
                onMouseOut={this.removeBorder}
                onClick={this.props.hint}
            >
                <section className="mdc-card__media">
                    <Image src={this.props.image} preview=""/>
                </section>
                <section className="mdc-card__primary">
                    <h1 className="mdc-card__title mdc-card__title--large">{this.props.keyword ? <span>{this.props.keyword}</span> : ""}{this.props.title}</h1>
                </section>
                <section className="mdc-card__supporting-text">
                    {this.props.description}
                </section>
            </div>
        );
    }
}

export default Card;