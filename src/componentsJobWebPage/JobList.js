import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const JobList = ({newPost}) => {

    let navigate = useNavigate();


    function OnePost (id){
        navigate("/singlePost/"+id)
    }

    return (
        <div className="w-100 mar-40" >
            {newPost.map((x, index) =>
                <div key={index} onClick={()=> OnePost(x.id)}>
                    <div className="jobPost d-flex al-center j-evenly">
                        <div className="flex-1 d-flex al-center">
                            <img src={x.logo} alt=""/>
                            <div className="mar-none">
                                <h5>{x.jobTitle}</h5>
                                <h6>{x.jobTitle}</h6>
                            </div>
                        </div>
                        <div className="flex-1 d-flex al-center j-btw">
                            <div>{x.place}</div>
                            <div>
                                <div className={x.jobType ==="Part time" ? "backColor" : x.jobType === "Freelance" ? "backColor2" : "backColor3"}>{x.jobType}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobList;