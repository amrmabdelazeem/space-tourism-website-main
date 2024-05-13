import "./sidebar.scss";
import { NavLink } from "react-router-dom";

export default function Sidebar({ onClose, hide }) {
  const routes = ["home", "destination", "crew", "technology"];
  return (
    <div className="sidebar" style={{ display: hide ? "flex" : "none" }} onClick={onClose}>
      <button className="menu-btn" role="button" tabIndex="0">
        <svg className="close-menu" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </button>
      <div className="hr"></div>
      {routes.map((route, index) => {
        return (
          <div className="route" key={route}>
            <NavLink to={route}>
              <span>0{index}</span>
              {route}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
