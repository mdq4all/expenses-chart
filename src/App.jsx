import ChartContainer from "./components/ChartContainer"
import Header from "./components/Header"

function App() {
  return (
    <div className=' bg-Cream'>
      <div className=" h-screen flex items-center justify-center ">
        <div className="p-3 max-w-xl font-DM-sans sm:w-[50rem]">
          <Header />
          <ChartContainer />
        </div>
      </div>
    </div>
  )
}

export default App
