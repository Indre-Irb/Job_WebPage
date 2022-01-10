import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pageJobWebPage/HomePage";
import FindJobPage from "./pageJobWebPage/FindJobPage";
import PostJobPage from "./pageJobWebPage/PostJobPage";
import {useState} from "react";
import SinglePage from "./pageJobWebPage/SinglePage";

const JobWebPage = () => {

    const [getPost, setPost] = useState([{

    }])

    function post (item){
        setPost([...getPost, item])
        console.log(getPost)
    }

    function openPost(post){
        console.log(post)
    }

    return (
        <div className="jobWeb">
            <BrowserRouter>
                <div className="toolbar d-flex f-column">
                    <div className="blackToolbar d-flex j-btw">
                        <img
                            src="https://s3.amazonaws.com/jebbit-assets/images/o8FH7uoJ/business-images/JIXW3BNSSjKrKWMkaIrN_Monster_logo_Purple_and_Teal.png"
                            alt=""/>
                        <button className="toolbarBtn">Buy now</button>
                    </div>
                    <div className="whiteToolbar d-flex al-center j-evenly">
                        <img src="https://s3.eu-west-3.amazonaws.com/moovijob.prod/97722/jobteaser.png" alt=""/>
                        <div className="d-flex j-evenly">
                            <Link to="/home">Homepage</Link>
                            <Link to="/find">Find A Job</Link>
                            <Link to="/post">Post A Job</Link>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/home" element={<HomePage newPost={getPost}/>}></Route>
                    <Route path="/find" element={<FindJobPage newPost={getPost}/>}></Route>
                    <Route path="/post" element={<PostJobPage newPost={post}/>}></Route>
                    <Route path="/singlePost/:id" element={<SinglePage openPost={getPost}/>}></Route>
                </Routes>

                <div className="footer d-flex f-column al-center">
                    <h1>Got a question?</h1>
                    <h4>We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555</h4>
                    <div className="d-flex">
                        <div className="footerBox">
                            <img
                                src="https://www.companymatch.me/upload/profile/816205ac-685e-4b76-9006-ec8d0a00c55a-nl.png"
                                alt=""/>
                            <h5>Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the
                                process!</h5>
                        </div>
                        <div className="footerBox">
                            <h3>Site Map</h3>
                            <ul>
                                <li>Blog</li>
                                <li>Bookmarks</li>
                                <li>Cart</li>
                                <li>FAQ</li>
                                <li>Home</li>
                                <li>Find a Job</li>
                                <li>Post a Job</li>
                            </ul>
                        </div>
                        <div className="footerBox">
                            <h3>Recent News Article</h3>
                            <h4>The Best (and Worst) Canadian Merchant Account Providers</h4>
                            <h6 className="mar-none">March 29, 2016</h6>
                            <h4>Do you have a job that the average person doesn’t even know exists?</h4>
                            <h6 className="mar-none">March 22, 2016</h6>
                            <h4>DigitalOcean launches first Canadian data centre in Toronto</h4>
                            <h6 className="mar-none">February 22, 2016</h6>
                        </div>
                        <div className="footerBox">
                            <h3>Jobify Offices</h3>
                            <h4>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282</h4>
                            <h4>Jobify Inc Canada. 545 Younge St, Suite 11 Toronto, Ontario M4K 6F4</h4>
                        </div>
                    </div>
                </div>
            </BrowserRouter>

        </div>
    );
};

export default JobWebPage;