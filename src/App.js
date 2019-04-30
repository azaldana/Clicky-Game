import React from "react";
import CardChoices from "./components/CardChoices";
import Wrapper from "./components/Wrapper";
import friends from "./choices.json";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

class App extends React.Component {
  state= {
    friends: friends,
  };

  handleRemove = id => {
    const filteredFriends = this.state.friends.filter(f=>  f.id !== id);
    this.setState({friends: filteredFriends});
  };

render() {
  return (
    <Wrapper>
      <Header></Header>
      <Jumbotron></Jumbotron>
      
      {this.state.friends.map(f => (
        <CardChoices
          image={f.image}
          handleClick={()=> this.handleRemove(f.id)}
        />
      ))}
    </Wrapper>
  );
  }
}

export default App;