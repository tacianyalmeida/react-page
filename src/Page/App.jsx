import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Sobre from "./Sobre"
import Contato from "./Contato"
import Footer from "./Footer"
import Pagina404 from "./Pagina404"

const App = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/Sobre" element={<Sobre/>} />
            <Route  path="/Contato" element={<Contato/>} />
            <Route  path="*" element={<Pagina404/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        )
}
export default App;