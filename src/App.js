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
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      let continueGame = this.handleIncrement();
      if (continueGame){
        this.setState({
          clicked: this.state.clicked.concat(id)
        });
      }
    
    } else {
      this.setState({
        currentScore: 0,
        topScore: this.state.topScore,
        clicked: []
      });
      alert("You Lost. Play Again?");
      this.handleShuffle();
    }
  };

  handleIncrement = () => {
    let continueGame = true;
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
      this.setState({
        currentScore: 0,
        clicked: []
      })
      continueGame = false;
    }
    this.handleShuffle();
    return continueGame;
  }

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({
      friends: shuffledFriends
    });
  }

  render() {
    console.log("This is the state", this.state);
    return (
      <Wrapper>
        <Header
          score={this.state.currentScore}
          topScore={this.state.topScore}
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