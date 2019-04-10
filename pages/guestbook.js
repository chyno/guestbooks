import Link from 'next/link'

export default function Guestbook() {
    return (
      <div>
        <p>Hello From guestbook.</p>
        <Link href="/"><a>Back to Main</a></Link>
      </div>
    )
  }