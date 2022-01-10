import React from 'react';
import JobList from "../componentsJobWebPage/JobList";
import {useParams} from "react-router-dom";


const SinglePage = ({openPost}) => {

    let {id} = useParams();

    return (
        <div>
            {openPost.map((x, index) => x.id === id &&
                <div key={index}>
                    <div className="cardTopic d-flex f-column al-center">
                        <h1>{x.jobTitle}</h1>
                        <div className="d-flex">
                            <h5>{x.jobType}</h5>
                            <h5 className="br-r">{x.place}</h5>
                            <h5>{x.jobTitle}</h5>
                        </div>
                    </div>
                    <div className="pad-sides2">
                        <div className="d-flex j-center br-b mar-40">
                            <img className="flex-1 cardImage" src={x.logo} alt=""/>
                            <div className="flex-1">
                                <h2 className="text-lightG">Job Categories</h2>
                                <div>{x.jobCategory}</div>
                                <h2>Share Posting</h2>
                            </div>
                            <div className="flex-2 d-flex f-column">
                                <h2 className="text-lightG">Company Social Profiles</h2>
                                <div>{x.facebook}</div>
                                <button className="applyButton">APPLY FOR JOB</button>
                                <button className="bookmarkButton">LOGIN TO BOOKMARK THIS JOB</button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lightG">Overview</h2>
                            <img className="companyImage" src={x.image} alt=""/>
                            <h2 className="text-lightG">Company description</h2>
                            <p className="text-lightG">{x.companydsc}</p>
                            <h2 className="text-lightG">Job Description</h2>
                            <p className="text-lightG">{x.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePage;