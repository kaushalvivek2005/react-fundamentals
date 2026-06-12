

import Chai from "./chai"

function App() {
  const username = "kaushal kumar"

  return (
    <>      
    {/* fragment(<>...</>) */}
    {/*we can only write evaluated expressions inside the curly braces, we cannot write statements like if else or for loop*/}
   <Chai/>
   <h1>chai is very hot</h1>
   <h2>hello {username}</h2>    
   <p>test paragraph</p>

  </>
  )
}

export default App
