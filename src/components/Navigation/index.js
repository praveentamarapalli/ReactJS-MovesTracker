import {FaTruck, FaClipboardList} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiLogoutCircleFill} from 'react-icons/ri'

import './index.css'

const Navigation = () => (
  <div className="nav-bar">
    <ul className="nav-menu">
      <li className="nav-item active">
        <FaTruck className="nav-icon" />
        <p className="nav-heading">MY MOVES</p>
      </li>
      <li className="nav-item">
        <BsFillPersonFill className="nav-icon" />
        <p className="nav-heading">MY PROFILE</p>
      </li>
      <li className="nav-item">
        <FaClipboardList className="nav-icon" />
        <p className="nav-heading">GET QUOTE </p>
      </li>
      <li className="nav-item">
        <RiLogoutCircleFill className="nav-icon" />
        <p className="nav-heading">LOG OUT</p>
      </li>
    </ul>
  </div>
)

export default Navigation
