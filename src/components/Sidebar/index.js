import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/my-name.png'
import LogoSubtitle from '../../assets/images/Fahad-designstyle-jungle-o.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact={"true"} activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact={"true"}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
       <ul>
        <li>
          <a
            href="www.linkedin.com/in/cametome006"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fahadfaisal4"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://hackerone.com/cametome006?type=user"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faHackerrank} color="#4d4d4e" />
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
