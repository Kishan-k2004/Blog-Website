import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { AuthLayout, Login} from './components/index.js'
import {EditPost,Post,AddPost,AllPosts,SignUp,Home} from './pages/index.js'

// (function () {
//   const originalAddEventListener = EventTarget.prototype.addEventListener;
//   EventTarget.prototype.addEventListener = function (type, listener, options) {
//       if (type === 'touchstart' && !options?.passive) {
//           options = options || {};
//           options.passive = true;
//       }
//       originalAddEventListener.call(this, type, listener, options);
//   };
// })();


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />

      <Route path='/login' element={(
        <AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>
      )} />

      <Route path='/signup' element={(
        <AuthLayout authentication={false}>
          <SignUp/>
        </AuthLayout>
      )} />

      <Route path='/all-posts' element={(
        <AuthLayout authentication={""}>
          <AllPosts/>
        </AuthLayout>
      )} />

      <Route path='/add-post' element={(
        <AuthLayout authentication={" "}>
          <AddPost/>
        </AuthLayout>
      )} />

      <Route path='/edit-post/:slug' element={(
        <AuthLayout authentication={" "}>
          <EditPost/>
        </AuthLayout>
      )} />

      <Route path='/post/:slug' element={<Post/>} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
