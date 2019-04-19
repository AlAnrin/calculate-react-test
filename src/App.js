import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: 0,
            res: 0,
            sign: '0'
        };
    }

    btnNumberClick = e => {
        switch (this.state.sign) {
            case '0':
                this.setState({
                    first: +('' + this.state.first + '' + e)
                });
                break;
            case 'q':
                this.setState({
                    first: e,
                    sign: '0'
                });
                break;
            default:
                this.setState({
                    first: +('' + this.state.first + '' + e)
                });
        }
    };

    btnSignClick = e => {
        switch (e) {
            case '=':
                switch (this.state.sign) {
                    case '+':
                        this.setState({
                            res: this.state.res + this.state.first,
                            sign: 'q'
                        }, () => {
                            this.setState({first: this.state.res})
                        });
                        break;
                    case '-':
                        this.setState({
                            res: this.state.res - this.state.first,
                            sign: 'q'
                        }, () => {
                            this.setState({first: this.state.res})
                        });
                        break;
                    case '/':
                        if (this.state.first != 0)
                            this.setState({
                                res: this.state.res / this.state.first,
                                sign: 'q'
                            }, () => {
                                this.setState({first: this.state.res})
                            });
                        else this.clear();
                        break;
                    case '*':
                        this.setState({
                            res: this.state.res * this.state.first,
                            sign: 'q'
                        }, () => {
                            this.setState({first: this.state.res})
                        });
                        break;
                    default:
                        break;
                }
                break;
            default:
                this.setState({
                        sign: e,
                        res: this.state.first,
                        first: 0
                });
        }
    };

    clear = e => {
        this.setState({res: 0, first: 0, sign: '0'})
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="calculate">
                        <div className="column">
                            <div className="input">{this.state.first}</div>
                            <div className="rowButtons">
                                <button className="numberButton" onClick={() => this.btnNumberClick(0)}>0</button>
                                <button className="clearButton" onClick={this.clear}>CLEAR</button>
                                <button className="signButton" onClick={() => this.btnSignClick('*')}>*</button>
                                <button className="signButton" onClick={() => this.btnSignClick('/')}>/</button>
                            </div>
                            <div className="rowButtons">
                                <button className="numberButton" onClick={() => this.btnNumberClick(7)}>7</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(8)}>8</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(9)}>9</button>
                                <button className="signButton" onClick={() => this.btnSignClick('-')}>-</button>
                            </div>
                            <div className="rowButtons">
                                <button className="numberButton" onClick={() => this.btnNumberClick(4)}>4</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(5)}>5</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(6)}>6</button>
                                <button className="signButton" onClick={() => this.btnSignClick('+')}>+</button>
                            </div>
                            <div className="rowButtons">
                                <button className="numberButton" onClick={() => this.btnNumberClick(1)}>1</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(2)}>2</button>
                                <button className="numberButton" onClick={() => this.btnNumberClick(3)}>3</button>
                                <button className="signButton" onClick={() => this.btnSignClick('=')}>=</button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
