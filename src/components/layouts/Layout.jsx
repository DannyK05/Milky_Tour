import { Link, NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <header className="w-full bg-[#4E2A9B] text-white fixed flex items-center justify-between px-4">
        <p className="">
          <Link to={"/"}>Milky Tour</Link>{" "}
        </p>
        <nav className="space-x-8 text-lg">
          <NavLink to={"/render"}>3D Tour</NavLink>
          <NavLink to={"/news"}>News</NavLink>
        </nav>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
