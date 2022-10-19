import './App.css';
import { Routes,Route } from 'react-router-dom';
import React,{Suspense} from "react"
import LoadingScreen from './components/LoadingScreen';
// import Home from './components/Home';
// import ViewPosts from './components/ViewPosts';
// import ViewUsers from './components/ViewUsers';
// import NotFound from './components/NotFound';

 const Home= React.lazy(()=>import("./components/Home"));
 const ViewPosts= React.lazy(()=>import("./components/ViewPosts"));
 const ViewUsers= React.lazy(()=>import("./components/ViewUsers"));
 const NotFound= React.lazy(()=>import("./components/NotFound"));

function App() {

  return (
    <div className="App">
     <Routes>
     <Route
          path="/"
          element={
            <Suspense fallback={<><LoadingScreen/></>}>
              <Home />
            </Suspense>
          }
        />
      <Route path="/posts" 
      element={
        <Suspense fallback={<><LoadingScreen/></>}>
        <ViewPosts />
      </Suspense>
      }/>
      <Route path="/users" element={
        <Suspense fallback={<><LoadingScreen/></>}>
        <ViewUsers />
      </Suspense>
      }/>

      <Route path="*"  element={
                <Suspense fallback={<><LoadingScreen/></>}>
                <NotFound/>
              </Suspense>
            }
            />

     </Routes>

    </div>
  );
}

export default App;