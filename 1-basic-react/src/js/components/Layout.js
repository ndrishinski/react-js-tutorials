import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      otherTitle: "What the fuck you looking at"
    };
  }
  render() {
    setTimeout(() => {
      this.setState({ title: "Sorry, I meant Welcome Homie"})
    }, 2000);
    return (
      <div>
        <Header title={this.state.title}/>
        <Header title={this.state.otherTitle} />
        <Footer />
      </div>
    );
  }
}
