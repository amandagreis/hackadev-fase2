import { Link } from "react-scroll";

import "./styles.css";

export default function Showcase() {
    return (
        <header id="showcase">
            <Link 
            activeclassName="active"
            to="catalog" spy={true} 
            smooth={true} 
            offset={-88} 
            duration={500}>
                <a href="#catalog" className="btn" id="btn">Ver coleção 2022</a>
            </Link>
        </header>
    );
}