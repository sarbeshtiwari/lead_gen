import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path as needed
import './sidebar.css'
export default function Sidebar() {
    // const [isElementOpen, setIsElementOpen] = useState(false);
    // const [isQueryOpen, setIsQueryOpen] = useState(false);

    // const toggleElementCollapse = () => {
    //     setIsElementOpen(!isElementOpen);
    // };

    // const toggleQueryCollapse = () => {
    //     setIsQueryOpen(!isQueryOpen);
    // };

    return (
        <nav id="sidebar" className="ps">
            <div className="sidebar_blog_1">
                <div className="sidebar-header">
                   
                </div>
                <div className="sidebar_user_info">
                    <div className="icon_setting"></div>
                    <div className="user_profle_side">
                        <div className="user_img">
                            <img className="img-responsive" src={logo} alt="Star Estate" />
                        </div>
                        <div className="user_info">
                            <h6>Welcome</h6>
                            <p><span className="online_animation"></span> Online</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar_blog_2">
               
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-map purple_color2"></i> <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-files-o yellow_color"></i> <span>Logout</span></Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
