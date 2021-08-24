import React, { Component } from "react";

export default class Chekpoint extends Component {
  state = {
    Person: {
      fullName: "laibkhadidja",
      bio: "fullstack student",
      imgSrc: "./images/photosnap.svg",
      profession: "professional",
      shows: true,
    },
    counter: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>fullName: {this.state.Person.fullName}</h2>
        <h2>bio: {this.state.Person.bio}</h2>
        <h2>profession: {this.state.Person.profession}</h2>
        {this.state.Person.shows && <img src={this.state.Person.imgSrc} />}
        <button
          onClick={() => {
            this.setState({
              Person: {
                ...this.state.Person,
                shows: !this.state.Person.shows,
              },
            });
          }}
        >
          entrer
        </button>
      </div>
    );
  }
}
