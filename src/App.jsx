import { useState } from 'react'
import Label from './components/Label'
import CalculoImc from './components/Calculo'
import Resultado from './components/Resultado'

export default function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <div className='bg-cyan-700 h-screen text-center'>
      <div className='pt-52'>
        <Label nome="Peso:" value={peso} setValue={setPeso} />
        <Label nome="Altura:" value={altura} setValue={setAltura} />
        <CalculoImc peso={peso} altura={altura} resultado={setResultado} />
        <Resultado resultado={resultado} />

      </div>
    </div>
  )
}
