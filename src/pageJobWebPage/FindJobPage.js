import React, {useState} from 'react';
import JobList from "../componentsJobWebPage/JobList";

const FindJobPage = ({newPost}) => {


    console.log(newPost)

    return (
        <div>
            <div className="backImage5"></div>
            <div className="pad-sides d-flex f-column al-center">
                <div className="header1 d-flex j-center al-center">
                    <input type="text"/>
                    <select name="" id="">
                        <option defaultValue="" disabled hidden>
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
                        <option defaultValue="" disabled  hidden>
                            Choose a category
                        </option>
                        <option value="design">Design</option>
                        <option value="developement">Developement</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <button className="searchButton">Search</button>
                </div>
                <div className="checkboxInput br-r d-flex">
                    <div className="smallBox3">
                        <input type="checkbox"/> FREELANCE
                    </div>
                    <div className="smallBox3">
                        <input type="checkbox"/> FULL TIME
                    </div>
                    <div className="smallBox3">
                        <input type="checkbox"/> INTERNSHIP
                    </div>
                    <div className="smallBox3">
                        <input type="checkbox"/> PART TIME
                    </div>
                    <div className="smallBox3 br-r">
                        <input type="checkbox"/> TEMPORARY
                    </div>
                </div>
                <JobList newPost={newPost}/>
            </div>
        </div>
    );
};

export default FindJobPage;