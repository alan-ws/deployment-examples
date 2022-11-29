export default function Home() {
  const addEnvAndCreateDeployment = async () => {
    await fetch("/api/addEnv");
    await fetch("/api/deploy");
  };

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_DYNAMIC_KEY ?? "NONE PROVIDED"}</h1>
      <button onClick={addEnvAndCreateDeployment}>ADD ENV AND DEPLOY</button>
    </>
  );
}
