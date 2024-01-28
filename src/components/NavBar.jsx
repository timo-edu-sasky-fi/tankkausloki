import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar(){
    return(
        <nav>
        <ul className='NavBar'>
            <li>
                <Link to="/input">syöttö</Link>
            </li>
            <li>
                <Link to="/graph">Graafi</Link>
            </li>
            <li>
                <Link to="/output">Listaus</Link>
            </li>
        </ul>
        </nav>
    );
}