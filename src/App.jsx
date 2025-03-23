import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authslice'
import { Header,Footer } from './components/index'
import { Outlet } from 'react-router'

function App() {
  const [Loading, setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  },[])
  return Loading ? (
    <>
    <h1>Loading</h1>
    </>
  ) 
  : 
  (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
