import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../../../assets/a1.png';
import img2 from '../../../assets/a2.png';
import img3 from '../../../assets/a3.png';
import img4 from '../../../assets/a4.png';
import img5 from '../../../assets/b1.png';
import img6 from '../../../assets/b2.png';
import img7 from '../../../assets/b3.png';
import img8 from '../../../assets/b4.png';
import img9 from '../../../assets/bt1.png';
import img10 from '../../../assets/bt2.png';
import img11 from '../../../assets/bt3.png';
import img12 from '../../../assets/bt4.png';

const Gallery = () => {
    const [showSecondSet, setShowSecondSet] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleImageHover = (image) => {
        setHoveredImage(image);
    };

    const handleLoadMore = () => {
        setShowSecondSet(true);
    };

    const handleHideMore = () => {
        setShowSecondSet(false);
    };

    const imageSet = showSecondSet
        ? [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
        : [img1, img2, img3, img4, img5, img6];

    return (
        <div className="bg-orange-200">
            <div>
                <h3 className="text-center text-9xl pt-8 pb-8">Gallery</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ps-11 pr-11" >
                {imageSet.map((image, index) => (
                    <div className={`image-container ${hoveredImage === image ? 'hovered' : ''}`}
                        onMouseEnter={() => handleImageHover(image)}
                        onMouseLeave={() => handleImageHover(null)}
                        key={index}>
                        <img className="mask mask-hexagon h-96" src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div>
                {!showSecondSet && (
                    <div className="text-center pt-6 pb-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                )}
                {showSecondSet && (
                    <div className="text-center pt-6 pb-6">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleHideMore}
                        >
                            Hide
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
