function NavList(props){

    const stil = {
            display: 'inline-block',
            margin: '0 px',
    };

    const hover_btn = {
        className: "btn btn-lg btn-secondary"
    }

    const normal_btn = {
        className: "btn btn-lg btn-dark"
    }

    return (
        <li style={stil}>
            <a href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-lg btn-dark"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                >
                {props.menuElemani}
            </a>
        </li>
    );
}

export default NavList;