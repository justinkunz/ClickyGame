import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h2 className="navbar">
                    <div className="navLabel right">
                        React Clicky Game
                    </div>
                    <div className="scorecard left">
                        Score: {this.props.score} | High Score: {this.props.highscore}
                    </div>
                </h2>
            </div>
        );
    };
};

export default Navbar;