const Light = () => {
  return (
    <>
      <directionalLight position={[5, 2, 5]} intensity={2.2} castShadow />
      {/* Fill light */}
      <ambientLight intensity={0.2} />
    </>
  );
};

export default Light;
