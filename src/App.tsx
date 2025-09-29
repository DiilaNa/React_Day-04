import { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef("hello");
  console.log(ref);
  console.log(ref.current); 
  

  // useEffect(()=>{
  //   console.log("Component is re-rendered");
    
  // })

  // const handleClick = () => {
  //   ref.current += 1
  // }
  const inputRef = useRef<any>(null)
  const handleClick = () =>{
    inputRef?.current.focus() 
    inputRef.current.style.backgroundColor = "red"
    
  }
    
  return <div>
    <input ref={inputRef} />
    <button onClick={handleClick}>Click</button>
  </div>;
}

export default App;