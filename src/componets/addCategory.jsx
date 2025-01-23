import { useState } from "react"

export const AddCategory = ( {onNewValue} ) => {
    
    const [input, setInput] = useState('')
    const [isEmpty, setIsEmpty] = useState(null)

    const handleImput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()  
        if(input === '' || input === ' ' || input === '  ') {
            setIsEmpty(true)
            setInput('')
            return
        }else{
            setIsEmpty(false)
        }
        onNewValue(input.trim()) // aqui mando el input a la funcion de añadir el nuevo input a la lista de categorias
        setInput('')             // trim() para eliminar los espacios de adelante y atras
    }
    

    return (
        <form onSubmit={handleSubmit /* accion de oprimir la tecla ENTER */}> 
            <input 
                type="text" 
                placeholder="Buscar Gif"
                style={{marginBottom: "10px"}}
                value={input}
                onChange={ handleImput } //(event) => handleImput(event)
            />
            <button 
                style={ {fontSize: 20} }
                onClick={handleSubmit}
            > Buscar </button>
            { isEmpty === true && ( <h2 style={ {color: "orange"}}> Por favor, escriba lo que desea buscar </h2> ) }
        </form>
    )
}