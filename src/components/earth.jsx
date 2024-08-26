export const Earth = (props) => {
  return (
    <main>
      <button className="exit_button">Exit Tour</button>

      {props.children}
    </main>
  );
};
