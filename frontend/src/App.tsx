import Chat from './components/Chat'
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
    <div className='bg-black  min-h-screen flex justify-center items-center'>
      <Chat/>

    </div>
    </div>
  )
}

export default App
