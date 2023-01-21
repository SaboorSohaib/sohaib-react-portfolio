import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium, faAngellist } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="sohaib" />
        </Link>
        <nav>
            <NavLink exact="true" activeclass="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclass="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclass="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abdul-saboor-sohaib/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/SaboorSohaib">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://medium.com/@abdulsaboorsohaib?source=user_profile-------------------------------------">
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://angel.co/u/abdul-saboor-sohaib">
                    <FontAwesomeIcon icon={faAngellist} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;