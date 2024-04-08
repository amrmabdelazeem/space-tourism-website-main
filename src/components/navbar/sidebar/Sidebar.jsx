import "./sidebar.scss";

export default function Sidebar() {
  const routes = ["home", "destination", "crew", "technology"];
  return (
    <div className="sidebar">
      {routes.map((route, index) => {
        return (
          <div className="route" key={route}>
            <span>0{index}</span>
            <a key={route} href={`/${route}`}>
              {route}
            </a>
          </div>
        );
      })}
    </div>
  );
}
