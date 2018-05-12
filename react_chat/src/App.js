import React, { Component } from 'react';
import './App.css';
import EventEmitter from 'eventemitter3';
let messages = [],
    author='Eugene Razzhivin', 
    id=Date.now();

window.ee = new EventEmitter();

class Message extends Component{
  render(){
    let author=this.props.data.author,
        text=this.props.data.text;
    return(
      <div className={author==='Eugene Razzhivin' ? 'Message myMessage':'Message'}>
         <p className='author'>{author}:</p>
         <p className='text'>{text}</p>
      </div>
    );
  }
}

class Header extends Component{
  render(){   
    return(
      <header>
        <div className='headerWrap'>
          <span className='user'>react_chat:{author} </span>
        </div>
      </header>
    );
  }
}

class Main extends Component{
  render(){
    let data = this.props.data;
    var messageList=data.map(function(item, index) {
          return (
            <div key={index}>
              <Message data={item} />
            </div>
          )
        }).reverse()
    return(
      <main>
        {messageList}
      </main>
    );
  }
}

class Add extends Component{
  onBtnClickHandler(e) {
    e.preventDefault();
    var textEl = document.getElementById("text");
    var text = textEl.value;

    var item = [{
      id: id,
      author: author,
      text: text,
    }];

    window.ee.emit('Message.add', item);

    textEl.value = '';
  }
  render(){
    return(
      <form className='Add'>
        <textarea
          id='text'
          className='addText'
          placeholder='Введите сообщение'
          ref='text'>
        </textarea>
        <button
          className='addButton'
          onClick={this.onBtnClickHandler}>
          Отправить
        </button>
      </form>
    );
  }
}

class App extends Component {
  state={
    msg: messages
  }
  componentDidMount() {
    let self = this;
    window.ee.addListener('Message.add', function(item) {
      var nextMessage = item.concat(self.state.msg);
      self.setState({msg: nextMessage});
    });
  }
  componentWillUnmount() {
    window.ee.removeListener('Message.add');
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main data={this.state.msg}/>
        <Add/> 
      </div>
    );
  }
}

export default App;
