import { useState } from "react";

export const useImage = (images) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectImage = (index) => {
        setSelectedImage(images[index]);
    };

    const handleNextImage = () => {
        const i = images.indexOf(selectedImage);

        if (i < images.length - 1) {
            setSelectedImage(images[i + 1]);
        }
    };

    const handlePrevImage = () => {
        const i = images.indexOf(selectedImage);

        if (i > 0) {
            setSelectedImage(images[i - 1]);
        }
    };

    return {
        selectedImage,
        selectImage,
        handleNextImage,
        handlePrevImage
    }
}