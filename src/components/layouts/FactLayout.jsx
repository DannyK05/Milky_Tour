import "../../App.css";

export const FactLayout = (props) => {
  return (
    <div className="fact flex flex-col lg:space-x-4 lg:flex-row animate__animated animate__fadeInLeft ">
      <img src={props.image} alt="the planet image" />
      <p>{props.content}</p>
    </div>
  );
};
