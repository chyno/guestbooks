// This is the Link API
import Link from 'next/link'
import { format } from 'util';
//import {Message} from './components';
const Index = () => (
<form name='valform' method='post'  onSubmit={(e) => {
  console.log(document.forms[0]);
  e.preventDefault();      
  return false;
}}>
<div>
    <label >name</label> <input id='name'></input>
    <label >message</label> <input id='message'></input>
    <input type='button' value='Submit' ></input>
</div>
  <Message/>
</form>

)


export default Index


class Message extends React.Component {
    render() {
      return  (<div>Tmessage here</div>);
    }
}