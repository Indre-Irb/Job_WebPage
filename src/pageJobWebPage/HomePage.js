import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import JobList from "../componentsJobWebPage/JobList";

const HomePage = ({newPost}) => {

    const [getValue, setValue] = useState("default");
    const [getValueOne, setValueOne] = useState();


    let navigate = useNavigate();

    let lenght = newPost.length


    function submitSearch (){
        navigate("/find")
    }


 function addList (){

 }

    return (
        <div className="homepage">
            <div>
                <div className="backImage">
                    <div className="header d-flex f-column al-center j-center">
                        <h1 className="text-gray">The Easiest Way to Get Your New Job</h1>
                        <h4 className="text-gray">Find jobs, create trackable resumes and enrich you applications.</h4>
                        <div className="d-flex mar-20 al-center">
                            <input type="text"/>
                            <select name="" id="" >
                                <option defaultValue="" disabled selected hidden>
                                    All Regions
                                </option>
                                <option value="allregions">All Regions</option>
                                <option value="dalycity">Daly City</option>
                                <option value="kansas">Kansas</option>
                                <option value="manhattan">Manhattan</option>
                                <option value="newyork">New York</option>
                                <option value="ontario">Ontario</option>
                                <option value="paloalto">Palo Alto</option>
                                <option value="queens">Queens</option>
                                <option value="sacramento">Sacramento</option>
                                <option value="sanfrancisco">San Francisco</option>
                                <option value="sanjose">San Jose</option>
                                <option value="santarosa">Santa Rosa</option>
                                <option value="statenisland">Staten Island</option>
                                <option value="toronto">Toronto</option>
                            </select>
                            <select name="" id="">
                                <option defaultValue="" disabled selected hidden>
                                    Choose a category
                                </option>
                                <option value="design">Design</option>
                                <option value="developement">Developement</option>
                                <option value="marketing">Marketing</option>
                            </select>
                            <button onClick={submitSearch}>Search Jobs</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex f-column al-center mart-60">
                    <h1 className="text-lightG">Companies We've Helped</h1>
                    <h4 className="text-lightG">Some of the companies we've helped recruit excellent applicants over the
                        year.</h4>
                    <div className="logos">
                        <img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dolby-logo-final.svg"
                            alt=""/>
                        <img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/optimizely-logo-final.svg"
                            alt=""/>
                        <img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/desk-logo-final.svg"
                            alt=""/>
                        <img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dribbble-logo-final.svg"
                            alt=""/>
                        <img
                            src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/disqus-logo-final.svg"
                            alt=""/>
                    </div>
                </div>
                <div className="backImage2 d-flex al-center">
                    <div className="flex-3"></div>
                    <div className="flex-2">
                        <h1 className="text1">Make RecruIting Your Competitive Advantage</h1>
                        <h5 className="text1">Talent is a top priority for all startup founders and executives. Jobify
                            offers a way to completely optimize your entire recruiting process. Find better candidates,
                            conduct more focused interviews, and make data-driven hiring decisions.</h5>
                        <button className="btn1" onClick={() => navigate("/find")}>GET STARTED</button>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className="d-flex f-column al-center mart-60">
                    <h1 className="text-lightG">Hundreds of Jobs From All Over the Globe</h1>
                    <div className="w-80">
                        <JobList newPost={newPost}/>
                    </div>
                    <button className="loadButton" onClick={addList}>LOAD MORE LISTINGS</button>
                </div>
                <div className="backImage3 d-flex al-center">
                    <div className="flex-1"></div>
                    <div className="flex-2">
                        <h1 className="text1">Join Thousands of Companies That Rely on Jobify</h1>
                        <h5 className="text1">Jobify offers a way to completely optimize your entire recruiting process.
                            Find better candidates, conduct more focused interviews, and make data-driven hiring
                            decisions.</h5>
                        <button className="btn1" onClick={() => navigate("/find")}>GET STARTED</button>
                    </div>
                    <div className="flex-3"></div>
                </div>
                <div className="d-flex f-column al-center mart-60">
                    <h1 className="text-lightG">Jobify Site Stats</h1>
                    <h4 className="text-lightG">Here we list our site stats and how many people we’ve helped find a job
                        and companies have found
                        recruits. It's a pretty awesome stats area!</h4>
                    <div className="d-flex">
                        <div className="smallBox">
                            <h1 className="text-lightG">{lenght}</h1>
                            <h4 className="mar-none text-lightG">Job Posted</h4>
                        </div>
                        <div className="smallBox borderLeft">
                            <h1 className="text-lightG">0</h1>
                            <h4 className="mar-none text-lightG">Jobs Filled</h4>
                        </div>
                        <div className="smallBox borderLeft">
                            <h1 className="text-lightG">20</h1>
                            <h4 className="mar-none text-lightG">Companies</h4>
                        </div>
                        <div className="smallBox borderLeft">
                            <h1 className="text-lightG">5,298</h1>
                            <h4 className="mar-none text-lightG">Members</h4>
                        </div>
                    </div>
                </div>
                <div className="backImage4 d-flex f-column j-center al-center">
                    <h1 className="text1">Kind Words From Happy Candidates</h1>
                    <h5 className="text1">What other people thought about the service provided by Jobify</h5>
                    <div className="d-flex j-evenly">
                        <div className="d-flex f-column al-center">
                            <div className="smallBox2">
                                <p className="text-gray">Without Jobify i’d be homeless, they found me a job and got me
                                    sorted out quickly
                                    with everything! Can’t quite believe the service level that they offer!</p>
                            </div>
                            <img className="reviewProfile" src="https://randomuser.me/api/portraits/men/20.jpg" alt=""/>
                            <h6 className="text-white">Customer #6</h6>
                        </div>
                        <div className="d-flex f-column al-center">
                            <div className="smallBox2">
                                <p className="text-gray">I’m incredibly pleased with Jobify’s service. They offer
                                    quality candidates & super
                                    quick support, they have turned me into a big fan.</p>
                            </div>
                            <img className="reviewProfile" src="https://randomuser.me/api/portraits/women/17.jpg"
                                 alt=""/>
                            <h6 className="text-white">Customer #7</h6>
                        </div>
                        <div className="d-flex f-column al-center">
                            <div className="smallBox2">
                                <p className="text-gray">Excellent service offering a personal touch, if I had an issue
                                    they were no longer
                                    than a phone call away and were always quick to respond.</p>
                            </div>
                            <img className="reviewProfile" src="https://randomuser.me/api/portraits/women/36.jpg"
                                 alt=""/>
                            <h6 className="text-white">Customer #1</h6>
                        </div>
                        <div className="d-flex f-column al-center">
                            <div className="smallBox2">
                                <p className="text-gray">
                                    Jobify offer an amazing service and I couldn’t be happier! They are dedicated to
                                    helping recruiters find great candidates, wonderful service!
                                </p>
                            </div>
                            <img className="reviewProfile" src="https://randomuser.me/api/portraits/men/43.jpg" alt=""/>
                            <h6 className="text-white">Customer #2</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex f-column al-center mart-60">
                    <div className="d-flex f-column al-center">
                        <h1 className="mar-none text-lightG">Recent News Articles</h1>
                        <h5 className="text-lightG">Fresh job related news content posted each day.</h5>
                    </div>
                    <div className="d-flex mar-20">
                        <div className="article">
                            <img className="articleImage"
                                 src="https://i.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
                                 alt=""/>
                            <h2 className="text-lightG">The Best (and Worst) Canadian Merchant Account Providers</h2>
                            <h6 className="text-lightG">March 29, 2016 | 0 Comments</h6>
                            <p className="text-lightG">A job is a regular activity performed in exchange for payment. A
                                person usually begins a
                                job by becoming an employee, volunteering, or starting a business. The duration of a job
                                may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
                                judges). If a person is</p>
                            <button className="articleButton">Continue Reading</button>
                        </div>
                        <div className="article">
                            <img className="articleImage"
                                 src="https://i.picsum.photos/id/192/2352/2352.jpg?hmac=jN5UExysObV7_BrOYLdxoDKzm_c_lRM6QkaInKT_1Go"
                                 alt=""/>
                            <h2 className="text-lightG">Do you have a job that the average person doesn’t even know
                                exists?</h2>
                            <h6 className="text-lightG">March 22, 2016 | 0 Comments</h6>
                            <p className="text-lightG">A job is a regular activity performed in exchange for payment. A
                                person usually begins a
                                job by becoming an employee, volunteering, or starting a business. The duration of a job
                                may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
                                judges). If a person is</p>
                            <button className="articleButton">Continue Reading</button>
                        </div>
                        <div className="article">
                            <img className="articleImage"
                                 src="https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                                 alt=""/>
                            <h2 className="text-lightG">DigitalOcean launches first Canadian data centre in Toronto</h2>
                            <h6 className="text-lightG">February 22, 2016 | 0 Comments</h6>
                            <p className="text-lightG">A job is a regular activity performed in exchange for payment. A
                                person usually begins a
                                job by becoming an employee, volunteering, or starting a business. The duration of a job
                                may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
                                judges). If a person is</p>
                            <button className="articleButton">Continue Reading</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;