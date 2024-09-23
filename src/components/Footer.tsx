import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="absolute bottom-0 w-full bg-primary text-white rounded-t-lg h-14 items-center flex">
      <ul className="flex w-full justify-between px-5 text-2xl">
        <Link to={"/"}>
          <li>
            <i className="ri-home-line" />
          </li>
        </Link>
        <Link to={"/search"}>
          <li>
            <i className="ri-search-line" />
          </li>
        </Link>
        <Link to={"/playlist"}>
          <li>
            <i className="ri-play-list-fill" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
