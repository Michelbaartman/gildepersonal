import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Board object
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    newDebugLog(i) {
        return <DLog value={i} />;
    }

    render() { // called when created?
        let items = []
        let itemsVector = [3, 3]

        for (let i = 0; i < itemsVector[0]; i++) {
            <div className="squareTest">
                items.push({this.renderSquare(0)})
            </div>
        }

        return (
            <div>
                {items}
                {this.newDebugLog("return1")}
            </div>);
    }
}


// Square object
class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class DLog extends React.Component {
    render() {
        return (
            <text className="debuglog">
                {this.props.value}
            </text>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />)