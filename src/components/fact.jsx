import "../App.css";
export const Fact = (props) => {
  return (
    <div className="fact flex-column animate__animated animate__fadeInLeft ">
      <img src={props.image} alt="the planet image" />
      <p>{props.content}</p>
    </div>
  );
};
