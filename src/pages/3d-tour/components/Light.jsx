const Light = () => {
  return (
    <>
      <directionalLight position={[0, 0, 0]} intensity={2.5} castShadow />
      {/* Fill light */}
      <ambientLight intensity={1} />
    </>
  );
};

export default Light;
