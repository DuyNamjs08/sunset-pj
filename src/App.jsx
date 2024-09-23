import { Button } from "flowbite-react";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
