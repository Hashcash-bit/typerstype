import React from 'react'
import { Link } from 'react-router-dom'

const Store = () => {
  return (
    <div>
      Store
      <button>
        <Link to="/">Home</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/Settings">Settings</Link>
      </button>
    </div>
  )
}

export default Store
