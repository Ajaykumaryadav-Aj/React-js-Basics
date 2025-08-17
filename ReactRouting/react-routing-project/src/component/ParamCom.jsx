import React from 'react'
import { useParams } from 'react-router-dom'

const ParamCom = () => {
    const {id} = useParams();
  return (
    <div>
Param:{id}
    </div>
  )
}

export default ParamCom