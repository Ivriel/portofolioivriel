import ChipText from "./ChipText";
function App() {
  return (
    <div> 
      <h1 className="text-3xl font-bold underline text-center text-red-500">
    Hello world!
  </h1>
  <div><ChipText text={"Coba Chip Text:HTML"} color="border-red-500 text-red-500"/></div>
  <div><ChipText text={"Coba Chip Text:CSS"} color="border-red-500 text-blue-500"/></div>
  </div>
  )
}

export default App