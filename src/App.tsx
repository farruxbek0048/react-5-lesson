import { Route, Routes } from 'react-router-dom';
import Start from './pages/start/Start';
import About from './pages/about/About';
import PageNotFound from "./pages/page not found/PageNotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
