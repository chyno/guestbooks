// This is the Link API
import Link from 'next/link'
import { format } from 'util';
//import {Message} from './components';
const Index = () => (
<MainForm/>

)

export default Index


class MainForm extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {name : '', message: ''};
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState(Object.assign({}, this.state, { name : event.target.value}));
    }

    handleMessageChange(event) {
        this.setState(Object.assign({}, this.state, { message : event.target.value}));
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
         <div>

         <h2>Information</h2>
          <label>
            name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            message:
            <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
          </label>
          <input type="submit" value="Submit" /> 
          </div>
          <Link href="/guestbook"><a>Current Guestbooks</a></Link>

        </form>
      );
    }
  }


class Message extends React.Component {
    render() {
      return  (<div>Tmessage here</div>);
    }
}