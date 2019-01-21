import React from 'react';

class Image extends React.Component {

    render() {
        const imgSrc = "images/" + this.props.char + ".jpg"


        return (
            <div>
                <img src={imgSrc} alt={this.props.char} onClick={() => this.props.onImageClick(this.props.char)} className="compImg" />
            </div>
        );
    };
};

export default Image;