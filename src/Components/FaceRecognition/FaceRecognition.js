import React from 'react';

const FaceRecognition = ({ image, box }) => {


    const boxB = { top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }
    const noImg = { display: "none" }
    const img = { display: "block" }

    return (

        <div className='img-wrapper'>
            <img name='img' id='inputImage' alt='' src={image} style={image ? img : noImg} />
            <div className='bounding-box' style={image ? boxB : noImg} ></div>
        </div>


    );
}

export default FaceRecognition;