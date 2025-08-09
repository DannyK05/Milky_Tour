import "../../App.css";

export const FactLayout = (props) => {
  return (
    <div className="fact flex flex-col lg:flex-row animate__animated animate__fadeInLeft ">
      <img src={props.image} alt="the planet image" />
      <p>{props.content}</p>
    </div>
  );
};
