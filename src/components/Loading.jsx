const Loading = () => {
  return (
    <div className="flex items-center  justify-center h-[80vh] w-full ">
      <div className="flex items-center w-4/5 justify-center h-40 lg:w-2/5 rounded-xl">
        <div className="flex flex-col space-y-5 text-xl p-1 items-center">
          <div className="loader"></div>
          <p className="font-medium">Contacting Bzorp...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
