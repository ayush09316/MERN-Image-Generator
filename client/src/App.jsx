import React from 'react'
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import {logo} from './assets'
import {Home,CreatePost,Register,SignUp} from './pages'

const App = () => {
  return (
    <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to={'/'}>
          <img src={logo} alt='img'className='w-28 object-contain'/>
        </Link>
        <div className='flex gap-2'>
        <Link to={'/create-post'} className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:scale-105 '>Create</Link>
        <Link to={'/register'} className='font-inter font-semibold  text-black px-4 py-2 border border-[#6469ff] rounded-md hover:bg-[#6469ff43]'>Register</Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/create-post'element={<CreatePost/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/signin'element={<SignUp/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
