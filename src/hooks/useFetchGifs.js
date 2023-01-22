import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect(() => {
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
        getImages();
    }, []);

    return {
        images,
        isLoading: false
    }

}
