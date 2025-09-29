// import { useEffect, useRef } from "react";



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


// // --------------------------useMemo-----------------------------------
// import { useMemo, useState } from "react"

// const inputHandler = (value: any) =>{

//   let sum = 0
//   for (let i = 0; i < 1000000000; i++) {
//     sum++
    
//   }
//   return value
// }

// const App = () =>{
//   const [name,setName] = useState("")
//   const[email,setEmail] = useState("")
//   // const data = inputHandler(name) due to this app is slow

//   // use memo save data in a cache/always return a value
//   const data = useMemo(()=>
//     inputHandler(name),[name]
// )
  

//   console.log("rendered");
  
//   return <div>
//     <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
//     <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//     <p>{data}</p>
//   </div>
// }

// export default App


// ---------------------------Use Call baxk---------------------------------
import { useEffect, useState,useCallback} from "react"

const App = () =>{
  const [name,setName] = useState("")
   const[email,setEmail] = useState("")
   const[result,setResult] = useState("")


  //  component rerender - function is recreated
  //  const myFunction = () => {
  //   console.log("Function is called");
  //   return "hello"
    
  //  }

  const myFunction = useCallback(() => {
    console.log("Function is running");
    return "hello"
  },[])

   useEffect(() => {
    console.log("use effect is called");
    setResult(myFunction())},[myFunction])

    return (
      <div>
       <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
       <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p>{result}</p>
      </div>
    )

}

export default App