import './App.css';
import { Routes,Route } from 'react-router-dom';
import React from "react"
import Home from './components/Home';
import ViewPosts from './components/ViewPosts';
import ViewUsers from './components/ViewUsers';
import NotFound from './components/NotFound';

// const Home= React.lazy(()=>import("./components/Home"));
// const ViewPosts= React.lazy(()=>import("./components/ViewPosts"));
// const ViewUsers= React.lazy(()=>import("./components/ViewUsers"));
// const NotFound= React.lazy(()=>import("./components/NotFound"));

function App() {

  return (
    <div className="App">
     <h2>Lazy Loading Assignment in react</h2>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<ViewPosts/>}/>
      <Route path="/users" element={<ViewUsers/>}/>

      <Route path="*"  element={<NotFound/>}/>

     </Routes>

    </div>
  );
}

export default App;