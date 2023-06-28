import React from 'react'
import { Link } from 'react-router-dom'

const Leaderboard = () => {
  return (
    <div>
      Leaderboard
      <button>
        <Link to="/Store">Store</Link>
        <Link to="/">Type</Link>
        <Link to="/Settings">Settings</Link>
      </button>
    </div>
  )
}

export default Leaderboard
