import { useRef } from "react";

const App = () => {
  const ref = useRef("hello");
  console.log(ref);

  const handleClick = () => {
    ref.current = 
    }
  return <div>
    <button onClick={handleClick}>Click</button>
  </div>;
}

export default App;