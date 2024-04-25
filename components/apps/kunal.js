import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typewriter from 'typewriter-effect';

export class AboutKunal extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about ali" src="./themes/Flat-Remix-Blue-Dark/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' education" src="./themes/Flat-Remix-Blue-Dark/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' skills" src="./themes/Flat-Remix-Blue-Dark/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' projects" src="./themes/Flat-Remix-Blue-Dark/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali's resume" src="./themes/Flat-Remix-Blue-Dark/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutKunal;

export const displayAboutKunal = () => {
    return <AboutKunal />;
}


function About() {
    const mystyle = {
        color: 'red'
    }

    const mystyle2 = {
        color: 'white'
    }
    return (
        <>
            <div className="w-20 md:w-28 my-4 rounded-full">
                <img className="w-full" src="./images/logos/kunal-hi.gif" style={{
                    borderRadius: '12px',
                }}/>
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Kunal Raut</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">
                <Typewriter options={{
                    autoStart:true,
                    loop:true,
                    strings: [
                        "Web Developer!",
                        "Python Developer!"
                        
                    ],
                }

                }/>
                 </span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-professional" style={mystyle}>Profession: <span className=" font-medium" style={mystyle2}> Software Engineer.</span></li>
                <li className=" list-developer" style={mystyle}>Software Enthusiast: <span className=" font-medium" style={mystyle2}> Passionate about coding and software development.</span></li>
                <li className=" list-guitar" style={mystyle}>Musical Hobbyist: <span className=" font-medium" style={mystyle2}> Skilled in playing the guitar.</span></li>
                <li className=" list-ball" style={mystyle}>Active Gamer: <span className=" font-medium" style={mystyle2}> Enjoy volleyball and video games for recreation.</span></li>
                {/* <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books. </li>
                <li className=" mt-3 list-star"> And I also have interest in Deep Learning & Computer Vision!</li> */}
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education <img className="w-16 inline" src="./images/logos/kunal-reading.gif" style={{
                    marginLeft: '5%',
                    borderRadius: '12px',
                }}/>
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                    Lakshmi Narain College of Technology, Indore .
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Aug 2017 - Aug 2021</div>
                    <div className=" text-sm md:text-base">Computer Science & Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Bachelor of Technology</div>
                </li>
                <li className="list-disc mt-5">  
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                    Birla Institute of Technology .
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Jan 2024 - Present</div>
                    <div className=" text-sm md:text-base">Software Systems</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Master of Technology</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills <img className="w-16 inline" src="./images/logos/kunal-skill.gif" style={{
                    marginLeft: '3px',
                    borderRadius: '12px',
                }}/>
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've gained experience with a diverse range of programming languages.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> I'm Proficient at <strong className="text-ubt-gedit-orange">Drupal, Python, React.js & Javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="./images/logos/icons8-javascript-48.png" alt="kunal javascript" />
                        <img className="m-1" src="./images/logos/icons8-c-48.png" alt="kunal c++" />
                        <img className="m-1" src="./images/logos/icons8-python-48.png" alt="kunal python" />
                        <img className="m-1" src="./images/logos/icons8-css-48.png" alt="ali css" />
                        <img className="m-1" src="./images/logos/icons8-java-48.png" alt="ali css" />
                        <img title="Yeah it's a Hyper Text Markup language!" className="m-1" src="./images/logos/icons8-html-5-48.png" alt="kunal HTML" />
                        <img src="./images/logos/icons8-git-48.png" alt="kunal git" className="m-1" />
                        <img src="./images/logos/icons8-php-48.png" alt="kunal php" className="m-1" />
                        <img src="./images/logos/icons8-mysql-48.png" alt="kunal mysql" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="./images/logos/icons8-react-48.png" alt="kunal react" />
                        <img className=" m-1" src="./images/logos/icons8-nodejs-48.png" alt="kunal nodejs" />
                        <img className="m-1" src="./images/logos/icons8-drupal-for-developers-and-build-the-open-web-48.png" alt="kunal drupal" />
                        <img className="m-1" src="./images/logos/icons8-tailwind-css-48.png" alt="kunal tailwind css" />
                        <img src="./images/logos/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-48.png" alt="kunal jQuery" className="m-1" />
                        <img src="./images/logos/icons8-bootstrap-48.png" alt="kunal bootstrap" className="m-1" />
                        <img src="./images/logos/icons8-express-js-48.png" alt="kunal expressjs" className="m-1" />
                        <img src="./images/logos/icons8-nextjs-48.png" alt="kunal nextjs" className="m-1" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Hosted PBX Management System",
            description: [
                "Hosted PBX is a cloud-based phone system accessed via an IP network, eliminating the need for businesses to manage hardware and software. LGI offers a cloud-based HPBX product in Europe with a Drupal-based self-care portal developed by Ziggo, serving two portals: NL and PE, with plans to merge them into one. The system utilizes devices from Panasonic, Yealink, and Cisco, provisioned through shared servers, and incorporates Sipwise APIs for device provisioning and firmware delivery.",
            ],
            domains: ["Drupal", "PHP"]
        },
        {
            name: "Network Service Activation Application(NeMA)",
            description: [
                "The Network Service Activation Application is a comprehensive tool designed for telecom operators to automate the process of network service activation. It interfaces with order management systems, performs initial validations, and orchestrates service provisioning across various network elements. Built on a modern technology stack, it offers scalability, modularity, and flexibility, with features like network discovery, configuration backup, and policy management, enhancing the efficiency and reliability of network service activations.",
            ],
            domains: ["React Js"]
        },
        {
            name: "Covid-19 news tracker",
            description: [
                "Developed a Covid-19 news tracker desktop application using Python and web scraping techniques. This application allows users to fetch and view Covid-19 news from around the world, providing a centralized platform for accessing up-to-date information on the pandemic.",
            ],
            domains: ["Python"]
        },
        {
            name: "Image text extractor",
            description: [
                "Developed an Image Text Extractor application using Python, capable of accurately extracting text from images. This tool enables users to easily capture and convert text from images into editable and searchable formats, enhancing accessibility and usability of image-based content.",
            ],
            domains: ["Python"]
        },
        {
            name: "Wall crack detection",
            description: [
                "Developed a Wall Crack Detection application using Python and OpenCV. This tool analyzes images to detect cracks on walls, providing visual indicators of the crack area and its parameters, aiding in timely identification and maintenance of structural issues.",
            ],
            domains: ["Python"]
        },
        {
            name: "Object detection",
            description: [
                "Developed a real-time Yellow Color Object Detection application using Python. This tool utilizes computer vision techniques to identify and track yellow-colored objects in real-time video streams, offering a specialized solution for applications requiring color-specific object recognition.",
            ],
            domains: ["Python"]
        }
    ];

    const tag_colors = {
        "javascript": "blue-400",
        "firebase": "red-600",
        "Laravel": "red-500",
        "chrome-extension": "yellow-400",
        "flutter": "blue-500",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "C": "pink-400",
        "Snort": "yellow-400",
        "django": "green-200",
        "Ubuntu": "orange-500",
        "ubuntu server":"orange-300"
    }

    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects <img className="w-16 inline" src="./images/logos/kunal-project.gif" style={{
                    marginLeft: '3%',
                    borderRadius: '12px',
                }}/>
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Kunal Raut Resume.pdf" title="kunal resume" frameBorder="0"></iframe>
    )
}
