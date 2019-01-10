import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import home from './../Home/home';
import MenuExample from './../Navbar/navbar';
import reactForm from './../React-form/react-form';
import error from './../Error/error';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <MenuExample />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/reactform" component={reactForm} />
            <Route component={error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
