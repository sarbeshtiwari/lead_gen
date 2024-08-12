import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import Sidebar from './sidebar';
import Modal from './modal'; // Import the modal component
import './leads_genrated.css';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import {Link} from 'react-router-dom';



const Leads = () => {
    const [data, setData] = useState([
        { id: 359, name: 'Dinesh Negi', email: 'dineshnegi777@yahoo.co.in', mobile: '8920279367', projectName: 'Godrej Golf Links', query: '', startDate: '2024-05-18' },
        { id: 358, name: 'imran', email: 'imrankhan256768@gmail.com', mobile: '7453955006', projectName: 'ATS Pious Orchards', query: '', startDate: '2024-02-05' },
    ]);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            setData(data.filter(item => item.id !== id));
        }
    };

    const handleModalSubmit = (text) => {
        console.log('Submitted text:', text);
        // Handle text submission
    };

    const handleCopy = () => {
        // Assuming there's some text to copy; replace this with actual content
        const textToCopy = "Some text to copy";
    
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Text copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    };
    
    const downloadCSV = (data) => {
        const csvRows = [];
        // Adding headers
        csvRows.push(['Column1', 'Column2', 'Column3']); // Replace with actual headers
    
        // Adding data rows
        data.forEach(row => {
            csvRows.push([row.column1, row.column2, row.column3]); // Replace with actual data
        });
    
        const csvString = csvRows.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv'; // Replace with desired filename
        a.click();
    
        URL.revokeObjectURL(url);
    };
    
const downloadExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    XLSX.writeFile(wb, 'data.xlsx'); // Replace with desired filename
};

    

const downloadPDF = (data) => {
    const doc = new jsPDF();
    doc.text("PDF content here", 10, 10); // Customize as needed
    doc.save('data.pdf'); // Replace with desired filename
};


    return (
        <>
            <Sidebar />
            <div className="midde_cont">
                <div className="container-fluid">
                    <div className="row column_title">
                        <div className="col-md-12">
                            <div className="page_title">
                                <h2>Leads</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row column1">
                        <div className="col-md-12">
                            <div className="white_shd full margin_bottom_30">
                                <div className="full price_table padding_infor_info">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="table-responsive-sm">
                                                <table border="0" cellSpacing="5" cellPadding="5">
                                                    <tbody>
                                                        <tr>
                                                            <td>Start date:</td>
                                                            <td><input type="text" id="min" name="min" autoComplete="off" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>End date:</td>
                                                            <td><input type="text" id="max" name="max" autoComplete="off" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div id="pjdataTable_wrapper" className="dataTables_wrapper no-footer">
                                                <div className="dt-buttons">
                                                    <button 
                                                        className="dt-button buttons-copy buttons-html5" 
                                                        type="button" 
                                                        onClick={handleCopy}
                                                    >
                                                        <span>Copy</span>
                                                    </button>
                                                    <button 
                                                        className="dt-button buttons-excel buttons-html5" 
                                                        type="button" 
                                                        onClick={() => downloadExcel(data)} // Pass the data you want to export
                                                    >
                                                        <span>Excel</span>
                                                    </button>
                                                    <button 
                                                        className="dt-button buttons-csv buttons-html5" 
                                                        type="button" 
                                                        onClick={() => downloadCSV(data)} // Pass the data you want to export
                                                    >
                                                        <span>CSV</span>
                                                    </button>
                                                    <button 
                                                        className="dt-button buttons-pdf buttons-html5" 
                                                        type="button" 
                                                        onClick={() => downloadPDF(data)} // Pass the data you want to export
                                                    >
                                                        <span>PDF</span>
                                                    </button>
                                                </div>

                                                    <div id="pjdataTable_filter" className="dataTables_filter">
                                                        <label>Search:<input type="search" placeholder="" aria-controls="pjdataTable" /></label>
                                                    </div>
                                                    <table id="pjdataTable" className="table table-striped projects display dataTable no-footer" style={{ width: '100%' }}>
                                                        <thead className="thead-dark">
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                                <th>Mobile</th>
                                                                <th>Project Name</th>
                                                                <th>Query</th>
                                                                <th>Start date</th>
                                                                
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((item, index) => (
                                                                <tr key={item.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.email}</td>
                                                                    <td>{item.mobile}</td>
                                                                    <td>{item.projectName}</td>
                                                                    <td>{item.query}</td>
                                                                    <td>{item.startDate}</td>
                                                                    <td>
                                                                        <ul className="list-inline d-flex justify-content-end">
                                                                            <li>
                                                                                <button className="btn btn-danger btn-xs" onClick={() => handleDelete(item.id)}>
                                                                                    <i className="fa fa-trash"></i>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="btn btn-primary btn-xs" onClick={() => setModalOpen(true)}>
                                                                                    <i className="fa fa-plus"></i> Add Note
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="dataTables_info" role="status" aria-live="polite">Showing 1 to {data.length} of {data.length} entries</div>
                                                    <div className="dataTables_paginate paging_simple_numbers">
                                                        <Link className="paginate_button previous disabled" id="pjdataTable_previous">Previous</Link>
                                                        <span>
                                                            <Link className="paginate_button current" id="pjdataTable_page1">1</Link>
                                                        </span>
                                                        <Link className="paginate_button next" id="pjdataTable_next">Next</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleModalSubmit}
            />
        </>
    );
};

export default Leads;
