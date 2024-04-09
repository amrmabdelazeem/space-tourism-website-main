import "./navbar.scss";

export default function Navbar({onOpen, show}) {

  return (
    <header className="navbar">
      <img className="logo" src="/assets/shared/logo.svg" alt="logo" />
      <button className="menu-btn" role="button" tabIndex="0" onClick={onOpen}>
        {!show && (
          <svg className="menu-btn" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        )}
      </button>
    </header>
  );
}
