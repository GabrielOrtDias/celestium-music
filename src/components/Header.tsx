import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <div className=" h-16 w-full py-2">
      <ul className="flex items-center h-full justify-between px-4 text-primary">
        <li>
          <i className="ri-arrow-left-s-line text-2xl" />
        </li>
        <li className="h-full">
          <Link to={location.pathname}>
            <img src="logo.png" className="h-full" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="ri-user-line text-2xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
