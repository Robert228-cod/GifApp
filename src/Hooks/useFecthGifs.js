import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGrifs-js"


export const useFecthGifs = (categorias) => {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImage = await getGifs(categorias)
        setImages(newImage)
        setIsLoading(false) // el orden de lo set's debe ser igual a como cuando se crearon
    }
    
    useEffect(() => {
        getImages()
    },[])

    return {
        images, // esto equivale a: images: images
        isLoading // esto equivale a: isLoading:isLoading
    }

}