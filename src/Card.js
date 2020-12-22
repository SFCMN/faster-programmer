import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    displayBorder = (event) => {
        if (this.props.enableBorder !== false) {
            event.target.style.border = "solid 1px gray";
            event.target.style.borderRadius = "5px";
        }
    };

    undisplayBorder = (event) => {
        if (this.props.enableBorder !== false) {
            event.target.style.border = "none";
        }
    };

    render() {
        return (
            <div
                className="mdc-card"
                onMouseOver={this.displayBorder}
                onMouseOut={this.undisplayBorder}
                onClick={this.props.hint}
            >
                <section className="mdc-card__media">
                    <img src={this.props.image} alt="card logo"/>
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