import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
                    
          <span><img src=""/><p>Name Lastname</p></span>
        </header>
        <Main/>
        <div className="writeMessage">
        <form>
          <textarea></textarea>
          <button>Send</button>
        </form>
      </div>
      </div>
    );
  }
}
class Message extends Component{
  render(){
    return(
      <div className="messageBox">
        <img src="white.png"/>
        <span className="message"> </span>        
    </div>
    );
  }
}
class MyMessage extends Component{
  render(){
    return(
      <div className="myMessage">
        <img src=""/>
        <span className="message"></span>
      </div>
    );
  }
}
class Main extends Component{
  render(){
    return(
    <main>
      <Message/>
      <Message/>  
      <MyMessage/> 
      <Message/>
      <Message/>  
      <MyMessage/>                         
    </main>
    );
  }
}


export default App;
