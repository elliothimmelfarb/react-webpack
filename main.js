
// WELCOME MESSAGE COMPONENT ///////////////////////

const Welcome = React.createClass({
  render: function() {
    const {greeting, info} = this.props
    return (
      <div>
        <h1>{greeting}</h1>
        <p>{info}</p>
      </div>
    )
  }
})


// COUNTER COMPONENT ////////////////////////////

const Counter = React.createClass({
  render: function() {
    const { counterID, addCount, minusCount, count } = this.props
    return (
      <div>
        <h3>Counter { counterID }: { count }</h3>
        <button onClick={ addCount }>+</button>
        <button onClick={ minusCount }>-</button>
      </div>
    );
  },
})


// MESSAGE FORM /////////////////////////

const MessageForm = React.createClass({
  getInitialState: function() {
    return{
      message: '',
    }
  },

  onAddMessage: function() {
    this.props.addMessage(this.state.message);
    this.setState({ message: '' });
  },

  render: function() {
    return(
      <div>
        <input
          type="text"
          value={ this.state.message }
          onChange={ e => this.setState({ message: e.target.value }) }
          />
        <button onClick={this.onAddMessage}>Add Message</button>
        <p>{this.state.message}</p>
      </div>
    )
  }
});


// MESSAGE COMPONENT //////////////////////

const Message = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.message,
      editing: false,
    }
  },

  render: function() {
    const { id, deleteMessage } = this.props
    let message = !this.state.editing ?
      this.state.text :
      <input type='text' value={this.state.text} onChange={ e => this.setState({ text: e.target.value })}/>
    return(
      <li>
        {message}
        <button onClick={() => deleteMessage(id)}>DELETE</button>
        <button onClick={() => this.setState({ editing: !this.state.editing })}>{ this.state.editing ? 'Confirm' : 'Edit' }</button>
      </li>
    )
  }
})


// ROOT COMPONENT ////////////////////////

const Root = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      messages: [],
    };
  },

  addCount: function() {
    this.setState({ count: this.state.count + 1 });
  },

  minusCount: function() {
    this.setState({ count: this.state.count - 1 });
  },

  addMessage: function(message) {
    const newMessage = {
      message,
      id: uuid(),
    }
    this.setState({ messages: this.state.messages.concat(newMessage) });
  },

  deleteMessage: function(id) {
    this.setState({ messages: this.state.messages.filter(message => message.id !== id) })
  },


  render: function() {
    const message = {
      greeting: 'Hello World',
      info: `Let's count stuff!`,
    };

    const counterProps = {
      addCount: this.addCount,
      minusCount: this.minusCount,
      count: this.state.count,
    };

    let messages = this.state.messages.map((message, index) => {
      return <Message key={message.id} {...message} deleteMessage={this.deleteMessage}/>
    })

    let counters = 1
    return(
      <div>
        <Welcome {...message} />

        <MessageForm addMessage={ this.addMessage }/>

        <ul>
          {messages}
        </ul>

        <Counter counterID='1' {...counterProps} />
        <Counter counterID='2' {...counterProps} />
        <Counter counterID='3' {...counterProps} />
      </div>
    )
  },
})


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
