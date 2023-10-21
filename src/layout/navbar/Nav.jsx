import React from "react";
// import '../../assets/CSS/nav.css'
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <>
        <div className="flex justify-around items-center mt-8 ">
            <div>
               <h1 className="text-4xl text-red-400 font-bold">Logo</h1> 
            </div>
            <div className="nav-list  ">
                <ul className="flex gap-6 font-semibold text-xl ">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
        
        </>
    )
}
export default Nav