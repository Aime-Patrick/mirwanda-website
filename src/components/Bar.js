import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { Sidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function Bar() {

    let navigation = document.querySelector(".navigation");
    function active() {
        navigation.classList.toggle("active");
    }
        
  return (
    <>
    <Sidebar >
        <div className="navigation" onClick={active}>
            <ul>
                <li>
                    < Link to="#" className='links'>
                        <span className="icon">
                            
                        </span>
                        <span className="title">MiRwanda</span>
                    </Link>
                </li>

                <li>
                    <Link to="#" className='links'>
                        <span className="icon">
                        <AiOutlineHome  className='ion-icon'/>
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link to="#" className='links'>
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Customers</span>
                    </Link>
                </li>

                <li>
                    <Link to='#' className='links'>
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Messages</span>
                    </Link>
                </li>

                <li>
                    <Link to='#' className='links'>
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </Link>
                </li>

                <li>
                    <Link to='#' className='links'>
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </Link>
                </li>

                <li>
                    <Link to='#' className='links'>
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </Link>
                </li>

                <li>
                    <Link to='#' className='links'>
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
       </Sidebar>
    </>
  )
}

export default Bar;