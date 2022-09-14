import CartWidget from './CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () =>{
    return(
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <NavLink className='nav_link' to='/'>Mi marca</NavLink>
                </div>
                <ul className='nav_list'>
                    <li>
                        <NavLink className='nav_link' to='/categoria/remeras'>Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/categoria/shorts'>Shorts</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;