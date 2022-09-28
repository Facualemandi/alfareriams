import React from 'react'
import { useTheContext } from '../../context/context'

const Home = () => {
     const {userAutentication, logAuth} = useTheContext();
     console.log(userAutentication);

     if(userAutentication === null){
        return <p>Cargando</p>
     }

  return (
    <div>
       <p>{userAutentication.email}</p>
    <button onClick={logAuth}>
      Cerrar Sesion
    </button>

    </div>
  )
}

export default Home