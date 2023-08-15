import React from 'react'

const Card = ({medico, setTurno}) => {
    
  return (
    <div >
        <h3>{medico.nombre}</h3>
        <h4>{medico.especializacion}</h4>
        <button onClick={() => setTurno(true)}>Sacar turno</button>
    </div>
  )
}

export default Card