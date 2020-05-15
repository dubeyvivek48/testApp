import React from 'react';
import {navLink} from '../constant/NavLink'
import {Link} from "react-router-dom";
const  Navbar=()=> (
        <div className='navbar-fixed'>
            <div className="container">
                <div className="nav-link-container">
                    {navLink.map(d=>(
                            <div className={d.upComing ? 'link':'link'}>
                                <Link to={d.link}>
                                    {d.upComing && <span className='up-coming'>Upcoming</span>}
                                    {d.title}
                                </Link>
                            </div>
                        )
                    )}
                    <div className="btn-login"> login </div>
                </div>
            </div>
        </div>
    );

export default Navbar;
