import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/users">Users</Link>
      </li>

      <li>
        <Link to="/strict-access">Strict Access</Link>
      </li>
    </ul>
  )
}
