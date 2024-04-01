import { useState, useEffect } from 'react';
import hash from '../Hash';

export default function TestRedirectPage() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      console.log(mToken)
      setToken(mToken);
    }

  })

  return (
    <div>
        <h1>HEY ITS THE REDIRECT PAGE</h1>
        {token && <h2>authenticated</h2>}
    </div>
  )
}
