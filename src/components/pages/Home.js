import React from "react";

function Home() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-12" id="box">
                    <header>
                        <h1>About Me</h1>
                    </header>
                    <div class="row">
                        <div class="col-lg-3">
                            <img src={process.env.PUBLIC_URL + "/Headshot2.jpg"} alt="Headshot" class="img-thumbnail rounded-circle" />
                        </div>
                        <div class="col-lg-9">
                            <p>
                                I am a student in the Full Stack Web Development Boot Camp at UT Austin.
                                After a 13 years in the veterinary field, I am in search of another fulfilling career.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <p id="p-two">
                            Web development has more opportunities and potential directions for growth and creativity than many other
                            fields today.
                            I am excited to find out more about what I can become.
                            My goal after graduation is to find a position within a creative team where I can grow and support that team
                            in their efforts to benefit others.
                        </p>
                    </div>
                    <div class="row">
                        <p id="p-three">
                            <a href="https://www.linkedin.com/in/robyn-palmer-722442a9/" target="_blank">LinkedIn</a>
                            <br />
                            <a href="https://github.com/robynp108" target="_blank">GitHub</a>
                            <br />
                            <a href="" target="_blank">Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
