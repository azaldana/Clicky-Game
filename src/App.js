import React, { Component } from "react";
import CardChoices from "./components/CardChoices";
import Wrapper from "./components/Wrapper";
import friends from "./choices.json";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore
    })
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      })

    } if (newScore === 12) {
      alert("You Win!");
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    alert("You Lost. Play Again?");
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({
      friends: shuffledFriends
    });
  }

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron></Jumbotron>
        <div className="container cards">
          <div className="row">
            {this.state.friends.map(friend => (
              <CardChoices
                id={friend.id}
                image={friend.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;