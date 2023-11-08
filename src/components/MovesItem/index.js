import {BsArrowRight} from 'react-icons/bs'
import {AiFillHome, AiFillWarning} from 'react-icons/ai'
import {
  FaCalendarCheck,
  FaBoxes,
  FaCheckSquare,
  FaPencilAlt,
} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import './index.css'

const MovesItem = props => {
  const {moveDetails, expandDetails} = props
  const {
    customStatus,
    dateCreated,
    distance,
    estimateId,
    movingFrom,
    movingTo,
    propertySize,
    totalItems,
  } = moveDetails

  const onClickViewMore = () => {
    expandDetails(estimateId)
  }

  return (
    <li className="move-item">
      <div className="from-to-conatiner">
        <div className="from-container">
          <h1 className="from-to-heading">From</h1>
          <p className="from-to-address">{movingFrom}</p>
        </div>
        <div>
          <BsArrowRight className="direction-icon" />
        </div>
        <div className="to-container">
          <h1 className="from-to-heading">To</h1>
          <p className="from-to-address">{movingTo}</p>
        </div>
        <div className="request-container">
          <h1 className="from-to-heading">Request#</h1>
          <p className="request-id">{estimateId}</p>
        </div>
      </div>
      <div className="details-container">
        <div className="icon-text-container">
          <AiFillHome className="detials-icon" />
          <p>{propertySize}</p>
        </div>
        <div className="icon-text-container">
          <FaBoxes className="detials-icon" />
          <p>{totalItems}</p>
        </div>
        <div className="icon-text-container">
          <GiPathDistance className="detials-icon" />
          <p>{distance}</p>
        </div>
        <div className="icon-text-container">
          <FaCalendarCheck className="detials-icon" />
          <p>{dateCreated}</p>
          <FaPencilAlt className="detials-edit-icon" />
        </div>
        <div className="icon-text-container">
          <FaCheckSquare className="detials-icon" />
          <p>is flexible</p>
        </div>
        <div className="icon-text-container">
          <button
            type="button"
            className="view-more-button"
            onClick={onClickViewMore}
          >
            View more details
          </button>
          <button type="button" className="status-button">
            {customStatus}
          </button>
        </div>
      </div>
      <div className="icon-text-container">
        <AiFillWarning className="disclaimer-icon" />
        <p className="disclaimer">
          <span className="disclaimer-text">Disclaimer: </span>please update
          your move date before two days of shifting
        </p>
      </div>
      <hr className="hr" />
    </li>
  )
}

export default MovesItem
