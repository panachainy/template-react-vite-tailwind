import { UseAuth } from '@/pages/Auth/AuthContext'
import './Navbar.css'
function Navbar() {
  const { userInfo, logout } = UseAuth()

  return (
    <nav className="navbar">
      <div className="logo">React Router</div>
      <div className="user-status ml-6 flex items-center">
        <span
          className={`mr-2 inline-block h-3 w-3 rounded-full ${
            userInfo ? 'bg-green-500' : 'bg-gray-400'
          }`}
          title={userInfo ? 'Logged in' : 'Not logged in'}
        />
        <span className="font-medium text-sm text-white">
          {userInfo ? 'Logged in' : 'Not logged in'}
        </span>
      </div>

      {userInfo && (
        <button
          type="button"
          onClick={logout}
          className="ml-4 rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      )}

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/auth/login">Login</a>
        </li>
        <li>
          <a href="/auth/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pokemon">Pokemon</a>
        </li>
        <li>
          <a href="/zod">Zod</a>
        </li>
        <li>
          <a href="/styled">Styled</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
