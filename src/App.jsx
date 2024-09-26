/* eslint-disable react/prop-types */
import './App.css'
import { BarajitaFutbol } from './components/BarajitaFutbol'
import { jugadores } from './data/jugadores'
import { useState } from "react"

const barajitasEstilo = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: "wrap",
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  //Estados de React
  const [pais, setPais] = useState("todos");

  //Que es la funcion Filter en Javascript Arrays
  const jugadoresFiltrados = pais === "todos" ? jugadores : jugadores.filter((jugador) => {
    return jugador.seleccion === pais
  })
  
  return (
    <>
      {/* Que son los eventos en javascript, eventos en formularios en React */}
      <select onChange={(e) => {setPais(e.target.value)}}>
        <option value={"todos"}>Todos</option>
        <option value={"Colombia"}>Colombia</option>
        <option value={"Venezuela"}>Venezuela</option>
      </select>

      <div style={barajitasEstilo}>
        {/* Que es la funcion Map en javascript Arrays */}
        {jugadoresFiltrados.map((jugador) => {
          return <BarajitaFutbol key={jugador.nombre} nombre={jugador.nombre} seleccion={jugador.seleccion} linkImagen={jugador.foto} />
        })}
      </div>
      
    </>
  )
}

export default App
