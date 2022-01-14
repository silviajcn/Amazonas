import React, {useState, useEffect} from 'react';
import '../styles/Home.elements.css';

const BackTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div
                    className="back-top-container"
                    onClick={() => scrollToTop()}
                >
                    <p>Inicio de página</p>
                </div>
            )}
        </div>
    )
}

export default BackTop
