import React from 'react';
import Image from './Image';
import Navbar from './Navbar';




class ImageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clickedImgs: [], score: 0, highscore: 0 }
    }

    render() {
        const characters = ['andy', 'angela', 'darryl', 'dwight', 'jim', 'kevin', 'michael', 'oscar', 'stanley', 'toby']

        const onImageClick = char => {

            //test if image has been clicked
            if (this.state.clickedImgs.indexOf(char) === -1) {

                const newState = {
                    clickedImgs: [...this.state.clickedImgs, char],
                    score: this.state.score + 1
                }

                //if new score will be over pushed score, update high score
                if (this.state.score + 1 > this.state.highscore) {
                    newState.highscore = this.state.highscore + 1
                }

                //if user wins the game, reset
                if (this.state.score + 1 === characters.length) {
                    alert("You won the game!")
                    this.setState({ clickedImgs: [], score: 0 })
                }

                //if user has not won the game, set state with new data
                else {
                    this.setState(newState)
                }
            }

            //if user clicks on duplicate image, reset game
            else {
                this.setState({ clickedImgs: [], score: 0 })
            }
        }

        const mapChars = () => {

            //randomize image array
            const randChar = []
            while (randChar.length !== characters.length) {
                let i = Math.floor(Math.random() * characters.length)
                if (randChar.indexOf(characters[i]) === -1) {
                    randChar.push(characters[i])
                }
            }
            return randChar.map(c => <Image char={c} onImageClick={onImageClick} />)
        }

        return (
            <div>
                <div className="jumbotron ui card">
                    <div className="content">
                        <Navbar score={this.state.score} highscore={this.state.highscore} />
                        {mapChars()}
                        <p></p>
                    </div>
                </div>
            </div>
        );
    };
};

export default ImageContainer;