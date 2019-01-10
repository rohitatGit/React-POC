import React, { Component } from 'react';
import './navbar.css';

class MenuExample extends Component {

    constructor(){
        super();
        this.state = { focused : 0 };
    }

    clicked = (index) => {
        this.setState({ focused: index });

    }

    render() {
        const items = ['Home', 'React-Form', 'Contact us'];
        var self = this;
        return (
            <div>
                <ul>{items.map(function (m, index) {
                    var style = '';
                    if (self.state.focused == index) {
                        style = 'focused';
                    }
                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:
                    return <li className={style} key={index} onClick={self.clicked.bind(self, index)}>{m}</li>;

                })}
                </ul>
                <p>Selected: {items[this.state.focused]}</p>
            </div>
        );

    }

}

export default MenuExample;
