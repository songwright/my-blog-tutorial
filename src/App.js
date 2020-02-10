import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App" id="page-body">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesList} />
        <Route path="/article/:name" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
