import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [turno, setTurno] = useState(false)

  let medicos = [
    {id: 1, nombre: 'Wandulo Smithers', especializacion: 'Cardiologo'},
    {id: 2, nombre: 'Robert Plant', especializacion: 'Dermatologo'},
    {id: 3, nombre: 'Jesse Pinkman', especializacion: 'Otorrinonaringologo'},
  ]

  return (
    <>
      {medicos.map((medico) => <Card key={medico.id} medico={medico} setTurno={setTurno}/>)}
      {turno && <Form/>}

      {/* {turno ? <Form/> : null} Otra forma de escribir la linea 19
      {condicion ? 'lo  que va a pasar si es true' : 'lo que va a pasar si es false'} */}
    </>
  )
}

export default App
