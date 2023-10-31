
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div 
      className='
        px-10
        lg:px-32
        xl:px-48
        2xl:px-72
        min-h-screen
        flex
        flex-col
        justify-center
        gap-4
        lg:gap-6
        2xl:gap-8
        overflow-hidden
      '>
        <Navbar/>
        <Content/>
    </div>
    </>
  )
}

export default App
