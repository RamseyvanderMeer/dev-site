import React from 'react';
import './Photography.scss'

var listOfImages = [];

export default class Photography extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }
    UNSAFE_componentWillMount() {
        listOfImages = this.importAll(require.context('../../img/gallery/', false, /\.(png|jpe?g|svg)$/));
        console.log(listOfImages)
    }
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            imagePath: ''
        };
    }

    render() {
        return (
            <div className="gallery">
                <div className="gallery__gallery">
                    {
                        listOfImages.map(
                            (image, index) => <div onClick={() => this.setState({ open: !this.state.open, imagePath: image })} className="gallery__container"><img className="gallery__image" key={index} src={image} alt="small" /></div>,
                        )
                    }
                </div>
                <div onClick={() => this.setState({ open: !this.state.open, imagePath: '' })} className={`gallery__modal ${this.state.open ? 'gallery__modal--open' : ''}`}>
                    <img className={`gallery__full-image ${this.state.open ? 'gallery__full-image--open' : ''}`} src={this.state.imagePath} alt="full" />
                </div>

            </div>
        )
    }
}