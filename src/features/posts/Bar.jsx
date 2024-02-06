import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Bar() {
  return (
    <div>
        <NavLink to="auth">login</NavLink>
        <NavLink to="users">user</NavLink>
    </div>
  )
}
