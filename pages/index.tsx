export default function Home() {
  const addEnv = () => fetch("/api/addEnv");
  const deploy = () => fetch("/api/deploy");

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_DYNAMIC_KEY ?? "NONE PROVIDED"}</h1>
      <button onClick={() => addEnv()}>ADD ENV</button>
      <button onClick={() => deploy()}>DEPLOY</button>
    </>
  );
}
