import {BrowserRouter,Routes,Route} from "react-router-dom";
import Blog from "./Blog";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Gizem from "./Gizem";
import Giris_form from "../Giris_form";
import Kayit_form from "../Kayit_form";

export default function Router(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="Blog" element={<Blog/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
                <Route path="Gizem" element={<Gizem/>}/>
                <Route path="Giris_form" element={<Giris_form/>}/>
                <Route path="Kayit_form" element={<Kayit_form/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}