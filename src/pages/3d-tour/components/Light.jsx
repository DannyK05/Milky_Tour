const Light = () => {
  return (
    <>
      <directionalLight position={[0, 0, 0]} intensity={2.2} castShadow />
      {/* Fill light */}
      <ambientLight intensity={0.4} />
    </>
  );
};

export default Light;
