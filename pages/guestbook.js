import Link from 'next/link'
import React from 'react'

class Guestbook extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = 'foo'; // req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
    <div>
        <div>Hello World {this.props.userAgent}</div>
        <div><Link href="/"><a>Back to Main</a></Link></div>
        </div>);
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