import React from 'react';
import './App.css';
import Title from "./Components/Title";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: [
  //       // { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  //       // { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  //       // { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
  //     ],

  //   }
  // }
  state = {
    profiles: [],
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }
  render() {
    return (
      <div className="App" >
        <Title />
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} /> 
      </div>
    );
  }
}

export default App;
