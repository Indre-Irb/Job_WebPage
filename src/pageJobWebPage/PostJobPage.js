import React, {useRef, useState} from 'react';


const PostJobPage = ({newPost}) => {

    const [getRegionOption, setRegionOption] = useState("")
    const [getJobTypeOption, setJobTypeOption] = useState("")
    const [getJobCategoryOption, setJobCategoryOption] = useState("")

    const details = {
        email: useRef(),
        password: useRef(),
        verifyPassword: useRef(),
        company: useRef(),
        jobTitle: useRef(),
        place: useRef(),
        urlEmail: useRef(),
        image: useRef(),
        description: useRef(),
        logo: useRef(),
        companydsc: useRef(),
        facebook: useRef(),
        linkedin: useRef(),

    }

    function createPost() {
        const post = {
            email: details.email.current.value,
            password: details.password.current.value,
            verifyPassword: details.verifyPassword.current.value,
            company: details.company.current.value,
            place: details.place.current.value,
            jobTitle: details.jobTitle.current.value,
            urlEmail: details.urlEmail.current.value,
            jobRegion: getRegionOption,
            jobType: getJobTypeOption,
            jobCategory: getJobCategoryOption,
            image: details.image.current.value,
            description: details.description.current.value,
            logo: details.logo.current.value,
            companydsc: details.companydsc.current.value,
            facebook: details.facebook.current.value,
            linkedin: details.linkedin.current.value,
            id: ""
        }
        newPost(post)

        const abc = "abcdefghijklmnoprstuvz"

        for (let i = 0; i < 3; i++) {
            const num = Math.round(Math.random() * 100)
            const letter = abc[Math.floor(Math.random() * abc.length)]
            post.id += num + letter
        }
    }

    const changeRegionOption = (newOption) => {
        setRegionOption(newOption)
    }
    const changeJobTypeOption = (newOption) => {
        setJobTypeOption(newOption)
    }
    const changeJobCategoryOption = (newOption) => {
        setJobCategoryOption(newOption)
    }

    return (
        <div className="form d-flex f-column al-center j-center mart-60">
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">HAVE AN ACCOUNT?</h4>
                <div className="signInput2 text-lightG d-flex j-btw al-center">
                    <h4>If you don't have an account you can create one below by entering your email
                        address/username.</h4>
                    <button className="signButton">Sign</button>
                </div>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">YOUR EMAIL</h4>
                <input ref={details.email} className="signInput" type="text" placeholder="you@yourdomain.com"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">PASSWORD</h4>
                <input ref={details.password} className="signInput" type="text"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">VERIFY PASSWORD</h4>
                <input ref={details.verifyPassword} className="signInput" type="text"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">COMPANY</h4>
                <input ref={details.company} className="signInput" type="text"
                       placeholder="Please enter 3 or more characters"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">JOB TITLE</h4>
                <input ref={details.jobTitle} className="signInput" type="text"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">LOCATION(OPTIONAL)</h4>
                <input ref={details.place} className="mar-none signInput" type="text"
                       placeholder="e.g.&quot;London&quot; "/>
                <h5 className="text-lightG">Leave this blank if the location is not important</h5>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">APPLICATION EMAIL/URL</h4>
                <input ref={details.urlEmail} className="signInput" type="text"
                       placeholder="Enter an email address or website URL"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">JOB REGION</h4>
                <select className="formSelect" onChange={(event) => changeRegionOption(event.target.value)}
                        value={getRegionOption}>
                    <option defaultValue="" disabled hidden>
                        Choose a region...
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
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">JOB TYPE</h4>
                <select className="formSelect" onChange={(event) => changeJobTypeOption(event.target.value)}
                        value={getJobTypeOption}>
                    <option value="Freelance">Freelance</option>
                    <option value="Full time">Full time</option>
                    <option value="Internship">Internship</option>
                    <option value="Part time">Part Time</option>
                    <option value="Temporary">Temporary</option>
                </select>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">JOB CATEGORY</h4>
                <select className="formSelect" onChange={(e) => changeJobCategoryOption(e.target.value)} value={getJobCategoryOption}>
                    <option defaultValue="" disabled hidden>
                        Choose a category...
                    </option>
                    <option value="design">Design</option>
                    <option value="developement">Developement</option>
                    <option value="marketing">Marketing</option>
                    <option value="sale">Sale</option>
                </select>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">FEATURED IMAGE (OPTIONAL)</h4>
                <input ref={details.image} className="signInput" type="url" scr="" placeholder="https://"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">DESCRIPTION</h4>
                <textarea ref={details.description} className="postTextArea"></textarea>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">LOGO (OPTIONAL)</h4>
                <input ref={details.logo} className="signInput" type="text" placeholder="https://"/>
            </div>
            <div className="mar-40 w-80">
                <h1 className="text-lightG">Company Details</h1>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">DESCRIPTION(OPTIONAL)</h4>
                <textarea ref={details.companydsc} className="postTextArea"></textarea>
            </div>
            <h4 className="text-lightG mar-40 w-80">(OPTIONAL)</h4>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">FACEBOOK USERNAME (OPTIONAL)</h4>
                <input ref={details.facebook} className="signInput" type="text" placeholder="yourcompany"/>
            </div>
            <div className="mar-40 w-80">
                <h4 className="mar-none text-lightG">LINKEDIN USERNAME (OPTIONAL)</h4>
                <input ref={details.linkedin} className="signInput" type="text" placeholder="yourcompany"/>
            </div>
            <div className="d-flex mar-40 w-80">
                <button className="editButton">PREVIEW</button>
                <button className="editButton" onClick={createPost}>SAVE DRAFT</button>
            </div>
        </div>
    );
};

export default PostJobPage;