import React from "react";
import "./App.css";
import Headerts from "./components/header/header";
import { ProductsPage } from "./components/ProductsPage";
import  CountriesPage  from "./components/CountriesPage";
import Nav from "./components/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Headerts />
          <Nav />
          <div>
            <Switch>
              <Route exact path="/" component={CountriesPage} />
              <Route path="/products" component={ProductsPage} />
              <Route exact path="*" component={() => <h1> Not found </h1>} />
            </Switch>
          </div>
        </Router>

        {/* <Nav />
        <CountriesPage />
        <ProductsPage /> */}
      </div>
    );
  }
}
export default App;
