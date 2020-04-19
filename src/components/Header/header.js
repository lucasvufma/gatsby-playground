import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import profile from '../..//assets/profile3.jpeg'

const Header = () => {
    return (
        <header>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.profileCard}>
                    <img src={profile} />
                    <h1>Lucas Machado</h1>
                </div>
                <ul className={headerStyles.list}>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/" >About
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/blog" >Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.listItem}
                            activeClassName={headerStyles.activeListItem}
                            to="/projects">Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
