// import { useEffect, useRef } from "react";

import { useMemo, useState } from "react"

// const App = () => {
//   const ref = useRef("hello");
//   console.log(ref);
//   console.log(ref.current); 
  

  // useEffect(()=>{
  //   console.log("Component is re-rendered");
    
  // })

  // const handleClick = () => {
  //   ref.current += 1
  // }

//   const inputRef = useRef<any>(null)
//   const handleClick = () =>{
//     inputRef?.current.focus() 
//     inputRef.current.style.backgroundColor = "red"
    
//   }
    
//   return <div>
//     <input ref={inputRef} />
//     <button onClick={handleClick}>Click</button>
//   </div>;
// }

// export default App;


// --------------------------useMemo-----------------------------------

const inputHandler = (value: any) =>{

  let sum = 0
  for (let i = 0; i < 1000000000; i++) {
    sum++
    
  }
  return value
}

const App = () =>{
  const [name,setName] = useState("")
  const[email,setEmail] = useState("")
  // const data = inputHandler(name) due to this app is slow

  // use memo save data in a cache/always return a value
  const data = useMemo(()=>
    inputHandler(name),[name]
)
  

  console.log("rendered");
  
  return <div>
    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <p>{data}</p>
  </div>
}

export default App