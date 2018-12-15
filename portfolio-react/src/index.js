import React from "react";
import ReactDOM from "react-dom";

const aboutMe={
    name: "Aime",
    email:"aime.urquieta@outlook.com",
    profession: "Full-stack developer",
    statements:["LOVE TO LEARN!", "Active science researcher"],
}

function gettButtonText(){
    return "Submit!"
}

const App=()=>{
    return(
        <div>
            <form>
                <h2>Contact Me</h2>
                                <hr></hr>
                                <div>
                                    <div>
                                        <input id="first_name" type="text" className="validate"></input>
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div>
                                        <input id="last_name" type="text" className="validate"></input>
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                
                
                                <div className="row">
                                    <div className="inputField">
                                        <input id="email" type="email" className="validate"></input>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="inputField col s12">
                                        <textarea id="textarea2" className="materializeTextarea"></textarea>
                                        <label htmlFor="textarea2">Message</label>
                                    </div>
                                </div>
                                <div className="m-0">
                                    <button type="submit" className="btn btn-primary mb-2">{gettButtonText()}</button>
                                </div>
            </form>
                
        </div>);
    
};

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)