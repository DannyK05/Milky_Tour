import { Link, NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <header className="w-full cursor-pointer px-2 z-10 bg-[#4E2A9B] text-white fixed flex items-center justify-between lg:px-4">
        <p className="">
          <Link className="hover:underline" to={"/"}>
            Milky Tour
          </Link>{" "}
        </p>
        <nav className="grotesk space-x-4 lg:space-x-8 text-lg">
          <NavLink className="hover:underline" to={"/render"}>
            3D Tour
          </NavLink>
          <NavLink className="hover:underline" to={"/news"}>
            News
          </NavLink>
        </nav>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
