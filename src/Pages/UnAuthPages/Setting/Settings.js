import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      Setting
      <button>
        <Link to="/Store">Store</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/">Type</Link>
      </button>
    </div>
  )
}

export default Settings
