import { Link } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";

export const BeltLayout = (props) => {
  return (
    <main className="belt">
      <ScrollToTop />
      <Link to="/">
        {" "}
        <button className="exit_button">Exit Tour</button>
      </Link>

      {props.children}
    </main>
  );
};
