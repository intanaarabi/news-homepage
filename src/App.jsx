
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div 
      className='
        md:p-10
        xl:px-20
        2xl:px-72
        2xl:pb-10
        min-h-screen
        flex
        flex-col
        justify-center
        gap-8
        overflow-hidden
      '>
        <Navbar/>
        <Content/>
    </div>
    </>
  )
}

export default App
