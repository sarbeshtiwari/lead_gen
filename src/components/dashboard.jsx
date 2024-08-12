import Sidebar from "./sidebar";
import './dashboard.css';
import { Link } from "react-router-dom";


export default function Dashboard() {
    return(
        <>
        <Sidebar/>
        <div className="midde_cont">
            <div className="container-fluid">
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                </div>
                <div className="row column1">
                    <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                            <div className="full graph_head">
                                <h3 className="text-info text-capitalize">Check Leads</h3>
                            </div>
                            <div className="full price_table padding_infor_info">
                                <div className="row">
                                    <div className="col-md-6 col-lg-3">
                                        <Link to="/leads">
                                            <div className="full counter_section margin_bottom_30">
                                                <div className="couter_icon">
                                                    <div>
                                                        <i className="fa fa-building orange_color"></i>
                                                    </div>
                                                </div>
                                                <div className="counter_no">
                                                    <div>
                                                        <p className="head_couter">18</p>
                                                        <p className="total_no">Leads</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        </>
    );
}