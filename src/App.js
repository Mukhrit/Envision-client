import React, { Component } from 'react';
import Main from "./components/MainComponent";
import './App.css';
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
  componentDidMount(){
     AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
