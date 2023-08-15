import { useState } from 'react'

const Form = () => {

    const [paciente, setPaciente] = useState({
        nombre: '',
        obraSocial: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const handleSubmit = () => {
        if(paciente.nombre.length > 3 && paciente.obraSocial.length > 2){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    console.log(paciente)
  return (
    <div>
        <label>Nombre del paciente</label>
        <input type="text" value={paciente.nombre}
            onChange={(event) => setPaciente({...paciente, nombre: event.target.value})}
        />
        <label>Obra social</label>
        <input type="text" value={paciente.obraSocial}
            onChange={(event) => setPaciente({...paciente, obraSocial: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Sacaste turno para el dia 14/12/2025</h3>}
        {error && <h4 style={{color: 'red'}}>Por favor llene todos los campos</h4>}
    </div>
  )
}

export default Form