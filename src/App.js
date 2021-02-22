import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ProductId from "./pages/ProductId/ProductId";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/product/:productId" component={ProductId}></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className="footer">
          <div className="footer-body">
            <div> My First Site. </div>
            <div>
              <Link to="/">Home</Link>
              &nbsp; / &nbsp;
              <Link to="/contactUs">Contact Us</Link>
              &nbsp; / &nbsp;
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="footer-copyright">© Efrat Maatuf.</div>
        </footer>
      </div>
    </Router>
  );
};
export default App;
