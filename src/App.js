import './App.css';
import { BrowserRouter, Route,  Routes } from "react-router-dom"

import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' component={Trending} exact />
              <Route path='/movies' component={Movies} />
              <Route path='/search' component={Search} />
            </Routes>
        </Container>




        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>

    </>

  );
}

export default App;
