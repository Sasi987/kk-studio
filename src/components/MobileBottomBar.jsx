import { Link } from "react-router-dom";
import { PhoneIcon, WhatsAppIcon, CalendarIcon } from "../assets/icons/Icons.jsx";
import { BUSINESS, LINKS } from "../utils/business.js";

export default function MobileBottomBar() {
  return (
    <nav className="bottom-bar" aria-label="Quick actions">
      <div className="bottom-bar__inner">
        <a href={BUSINESS.phoneTel} className="bottom-bar__item">
          <PhoneIcon />
          <span>Call</span>
        </a>
        <a href={LINKS.whatsappHello} target="_blank" rel="noopener noreferrer" className="bottom-bar__item">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <Link to="/booking" className="bottom-bar__item bottom-bar__item--book">
          <CalendarIcon />
          <span>Book Now</span>
        </Link>
      </div>
    </nav>
  );
}
