import React from 'react';
import { Link } from 'react-scroll'

const ImageInputForm = ({ onInputChange, onButtonSubmit, name }) => {
    return (
        <div className='welcome-wrapper'>
            <div className='welcome'>
                {`Hello ${name}!`}
            </div>
            <p className='intro'>
               Welcome to Dimianni Face Detector!  
            </p>
            <p className='postIntro'>
                This app can detect a face on almost any picture! <br></br> <span>Give it a try! </span> 
            </p>
            <p className='preInput'>Please insert a link to a picture:</p>
            <div className='imageInputCont'>
                <input type="text" className='imageInput' placeholder="Link . . ." onChange={onInputChange} onFocus={(e) => e.target.value = ""} />
                <Link to="img" smooth={true} offset={50} duration={700}>
                    <button className='imageBtn' onClick={onButtonSubmit}>Detect</button>
                </Link>
                
            </div>
        </div>
    );
}

export default ImageInputForm;