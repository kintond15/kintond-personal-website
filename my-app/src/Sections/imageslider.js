import { useState } from "react";


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%', 
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(20%, -50%)',
        left: '32 px',
        fontSize: '20px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(2710%, -50%)',
        right: '32 px',
        fontSize: '20px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    };
    const dotsContainerStyles = {
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center'
    };
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '60px',
        color: 'white'
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    return (
      
        <div style = {sliderStyles}>
            <div style = {slideStyles} ></div>
            <div style = {dotsContainerStyles}>
                 {slides.map((slide, slideIndex) => (
                    <div 
                     key= {slideIndex} 
                     style = {dotStyles} 
                    onClick={() => goToSlide(slideIndex)}
                     >
                    •
                </div>
            ))}
        </div>
    </div>

    );

};
export default ImageSlider;