'use client';
import "../styles/sidebar.css"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Sidebar() {
  const currentPath = usePathname();
  const user = {
    name: 'Aditi Singh',
    email: 'aditisingh2024@nst.rishihood.edu.in',
    avatar: "/pfp.jpeg"
  }
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: '/dashboard_logo.png' },
    { name: 'Analytics', path: '/analytics', icon: "/analytics.png" },
    { name: 'Wallet', path: '/wallet', icon: "/wallet_logo.png" },
    { name: 'Blog', path: '/blog', icon: "/blog_logo.png" },
    { name: 'About', path: '/about', icon: "/about.png" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1 className="logo">
            <Image src="/logo.png" alt="logo" width={150} height={50}/>
          </h1>
        </div>

        <nav className="sidebar-menu">
          <ul className="sidebar-menu-list">
            {menuItems.map((item) => (
              <li key={item.path} className="sidebar-menu-item">
                <Link 
                  href={item.path} 
                  className={`sidebar-menu-link ${currentPath === item.path ? 'active' : ''}`}
                >
                  <i className="sidebar-menu-icon"><Image src={item.icon} alt="icon-icon" width={24} height={24} /></i>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="user-profile">
          <div className="user-info">
            <Image src={user.avatar} alt="User" className="user-avatar" width={40} height={40} />
            <div>
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
          <button className="logout-button">
            <i className="fas fa-sign-out-alt logout-icon"></i> Log out
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;