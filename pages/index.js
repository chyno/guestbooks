
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
      this.state = {name : '', message: '', result: ''};   
      this.submitForm = this.submitForm.bind(this);
    }
  
    // Promise for posts
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
        res.status === 200 ? this.setState( {name : '', message: '', result: 'Success!'}) : '';
      })
    }


    render() {
      return (
        <Form
        schema={mainSchema}
        onSubmit={this.submitForm}
        onError={(errors, data) => {
          Object.assign({}, this.state, { result : ''})
        }}
      >
        <TextField name="name" label="Name" type="text" value={this.state.name} />
        <TextField name="message" label="Message" type="text" value={this.state.message} />
        <SubmitField value="Submit" />
        <p>{this.state.result}</p>
      </Form>

      );
    }
  }


class Message extends React.Component {
    render() {
      return  (<div>Tmessage here</div>);
    }
}