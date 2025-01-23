import { useState } from 'react'
import { AddCategory, GifGrid } from './componets/index.js'

//todo averiguar que es un layout componet
// averiguar como empujar el footer al final flex grown y flecx shrink
const APIKey = 'KiLZCyQoCNMOHT8aIi81IkAIjgO1Zl0v'

export const App = () => {
  
  const [categorias, setCategorias] = useState([])

  const onAddCategory = (newCategory) => {
    if(categorias.includes(newCategory)) return
    const newList = [newCategory,...categorias]
    setCategorias(newList)
  }

  const onReduceCategory = (newIndex) => {
    const newListReduced = categorias.filter( (_,index) => index !== newIndex) // eliminar una categoria en el indice
    setCategorias(newListReduced)
  }

  return (
    <>
      <h1> Gif Expert App </h1>

      <AddCategory 
        onNewValue = {onAddCategory} 
      />

      {
        categorias.map( (text,index) => 
          <GifGrid 
            categorias = {text} 
            key={text}
            idx = {index}
            reduceCategory = {onReduceCategory}
          />
        ) 
      }

    </>
  )
}

export default App
