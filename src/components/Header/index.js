import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-con">
    <Link to="/" className="link-component">
      <img
        alt="website logo"
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button testid="hamburgerIconButton" type="button" className="btn">
          <GiHamburgerMenu className="icon" />
        </button>
      }
    >
      {close => (
        <>
          <div className="pop-up-container">
            <button
              testid="closeButton"
              type="button"
              className="btn close-icon"
              onClick={() => close()}
            >
              <IoMdClose className="icon" />
            </button>
            <div className="menu-responsive-container">
              <ul className="menu-home-about-con">
                <Link to="/" className="link-component">
                  <li className="name-icon-con">
                    <AiFillHome className="menu-icon" />
                    <p className="icon-name">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link-component">
                  <li className="name-icon-con">
                    <BsInfoCircleFill className="menu-icon" />
                    <p>About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
