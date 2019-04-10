
// This is the Link API
import Link from 'next/link'
//import {Message} from './components';
import {
  Form,
  TextField, SubmitField 
} from 'react-components-form';
import Schema from 'form-schema-validation';

const Index = () => (
  <div>
    <MainForm/>
    <Link href="/guestbook"><a>Current Guestbooks</a></Link>
</div>

)

export default Index

const mainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});


class MainForm extends React.Component {
    constructor(props) {
     
      super(props);
      this.state = {name : '', message: ''};
    
      this.submitForm = this.submitForm.bind(this);
    }
  
     postResult$ = null;  

     submitForm (data) {
      console.log('submitting form .....');
     this.postResult$ =   fetch('/api/guestbook', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      this.postResult$.then((res) => {
        console.log('after post....');
        //res.status === 200 ? this.setState({ submitted: true }) : ''
      })
    }

    // handleNameChange(event) {
    //   this.setState(Object.assign({}, this.state, { name : event.target.value}));
    // }

    // handleMessageChange(event) {
    //     this.setState(Object.assign({}, this.state, { message : event.target.value}));
    //   }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + JSON.stringify(this.state));
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <Form
        schema={mainSchema}
        onSubmit={this.submitForm}
        onError={(errors, data) => alert('error', errors, data)}
      >
        <TextField name="name" label="Name" type="text" />
        <TextField name="message" label="Message" type="text" />
        <SubmitField value="Submit" />
      </Form>

      );
    }
  }


class Message extends React.Component {
    render() {
      return  (<div>Tmessage here</div>);
    }
}