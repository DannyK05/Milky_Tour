const Light = () => {
  return (
    <>
      <directionalLight position={[0, 0, 0]} intensity={2.5} castShadow />
      {/* Fill light */}
      <ambientLight intensity={0.7} />
    </>
  );
};

export default Light;
