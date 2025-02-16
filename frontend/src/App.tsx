import Landing from './components/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
