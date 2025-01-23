import { GifItem } from "./GifItem"
import { useFecthGifs } from "../Hooks/useFecthGifs"


export const GifGrid = ({categorias, idx, reduceCategory}) => {

    const { images, isLoading } = useFecthGifs( categorias ) 

    const reduce = () => {
        reduceCategory(idx)
    }

    return (
        <>
            <h1>{categorias}</h1>
            { isLoading === true && (<h2> Cargando.... </h2>) } 

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image } /*<=== manda todas las propiedades de image, util si son muchas*/
                        />
                    ))
                }
            </div>
            <button
                className="boton"
                onClick={reduce}
            > Eliminar </button>
        </>
    )
}