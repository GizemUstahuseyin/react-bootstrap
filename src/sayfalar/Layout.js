import {Outlet,Link} from "react-router-dom";
import { logout } from "../Functions";

    const stil = {
        display: 'inline-block',
        margin: '0 10px'
    };

    const hover_btn = {
        className: "btn btn-lg btn-secondary"
    }

    const normal_btn = {
        className: "btn btn-lg btn-dark"
    }

const Layout =()=>{
    return(
        <>

        <nav style={{textAlign:"center"}}>
            <ul className="p-3 bg-dark text-white">
                <li style={stil}><Link to="/" 
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Home</Link></li>

                <li style={stil}><Link to="Blog"  
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Blog</Link></li>

                <li style={stil}><Link to="Contact"  
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Contact</Link></li>

                <li style={stil}><Link to="Gizem"  
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Gizem</Link></li>

                <div class="text-end" id="user_name_div">
                <div id="btnGiris">
                <li style={stil}><Link to="Giris_form"  
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Sign-In</Link></li>
                
                <li style={stil}><Link to="Kayit_form"  
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}>
                Sign-Up</Link></li>
                </div></div>
                
                <div className="text-end" id="logout_btn_div" 
>
            <button 
                    id="logout_Btn" 
                    type="button" 
                    className="btn btn-danger" 
                    style={{ display: 'none' }} 
                    onClick={() => logout()} 
                    >
                      Çıkış
                      </button>
          </div>

            </ul>
        </nav>

        <Outlet/>
        </>
    );
}
export default Layout;