import { Link, NavLink, Outlet} from 'react-router'

export default function Header() {
    return(
       <div>
         <div>
            <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Logo</Link>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <Link to="about" className="hover:text-gray-400 transition">About</Link>
          </li>
          
          <li>
            <Link to="/uae/user/login" className="hover:text-gray-400 transition">Login</Link>
          </li>
          <li>
            <Link to="college" className="hover:text-gray-400 transition">College</Link>
          </li>
          <li>
            <Link to="users" className="hover:text-gray-400 transition">Users</Link>
          </li>
          <li>
            <Link to="list" className="hover:text-gray-400 transition">List</Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>
        <Outlet/>
       </div>
    )
}