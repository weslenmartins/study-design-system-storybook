import { Text } from './components/Text'
import './styles/global.css'

export function App() {

  return (
    <>  
      <h1 className="font-bold text-xs text-gray-800">Hello world</h1> 
      <button className='bg-cyan-500 font-medium text-sm px-4 py-2 rounded text-white hover:bg-cyan-300'>
        Send now
      </button>
      <Text>OI</Text>
      <Text>OI</Text>
      <Text asChild><p>asad</p></Text>
    </>
  )
}


