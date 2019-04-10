import Link from 'next/link'
import React from 'react'
import "isomorphic-fetch";

class Guestbook extends React.Component {

  constructor(props) { 
    super(props);
   // this.state = [{name : 'John Smith', message: 'Hi'}];   
   
  }
  static async getInitialProps({ req }) {
    //const data =  [{name : 'John Smith', message: 'Hi'}];
    let res = await fetch('/api/guestbooks')
    const data = await res.json()
    return { data }
  }

  
  render() {
    let tableData = this.props.data.map(function(obj) {
      return <tr><td>{obj.name}</td>
      <td>{obj.message}</td></tr>
     });
    return (
      <div>
      <table>
      <thead>
        <tr>
            <th style={{height: '50px'}}>Name</th>
            <th style={{height: '50px'}}>Message</th>
           
        </tr>
      </thead>
      <tbody>
      {tableData}
      </tbody>
      </table>
      <Link href="/"><a>Back TO Main</a></Link>
      </div>
    );
  }
}

export default Guestbook

// export default function Guestbook() {
//     return (
//       <div>
//         <p>Hello From guestbook.</p>
//         <Link href="/"><a>Back to Main</a></Link>
//       </div>
//     )
//   }