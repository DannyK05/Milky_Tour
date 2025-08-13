import "../../App.css";

export const FactLayout = (props) => {
  return (
    <div className="w-full flex flex-col text-xl items-center space-y-2 lg:justify-between lg:flex-row animate__animated animate__fadeInLeft ">
      <img
        className="lg:w-2/5 w-full"
        src={props.image}
        alt="the planet image"
      />
      <p className="lg:w-1/2 w-full text-justify">{props.content}</p>
    </div>
  );
};
