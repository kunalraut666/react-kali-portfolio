import React, { Component } from 'react'
import $ from 'jquery';
import ReactGA from 'react-ga';

export class Terminal extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.child_directories = {
            root: [ "projects", "personal-documents", "skills", "languages", "interests", "education"],
            skills: ["Front-end development","Back-end development", "React.js", "jQuery", "Drupal", "Python", "SQL"],
            projects: ["Hpbx", "Nema", "Covid 19 news tracker", "Image text extractor", "Wall crack detection", "Object detection"],
            interests: ["Playing Guitar", "Playing Volleyball", "Playing Games", "Coding", "Wactching Movies & Web Series"],
            languages: ["Python", "C", "C++", "Java", "Javascript"],
            education: ["10th and 12th","B.Tech", "M.Tech", "Experience"],
            projDesciption: {
                'hpbx': "Hosted PBX is a cloud-based phone system accessed via an IP network, eliminating the need for businesses to manage hardware and software. LGI offers a cloud-based HPBX product in Europe with a Drupal-based self-care portal developed by Ziggo, serving two portals: NL and PE, with plans to merge them into one. The system utilizes devices from Panasonic, Yealink, and Cisco, provisioned through shared servers, and incorporates Sipwise APIs for device provisioning and firmware delivery.",
                'nema':  "The Network Service Activation Application is a comprehensive tool designed for telecom operators to automate the process of network service activation. It interfaces with order management systems, performs initial validations, and orchestrates service provisioning across various network elements. Built on a modern technology stack, it offers scalability, modularity, and flexibility, with features like network discovery, configuration backup, and policy management, enhancing the efficiency and reliability of network service activations.",
                'covid 19 news tracker':   "Developed a Covid-19 news tracker desktop application using Python and web scraping techniques. This application allows users to fetch and view Covid-19 news from around the world, providing a centralized platform for accessing up-to-date information on the pandemic.",
                'image text extractor':  "Developed an Image Text Extractor application using Python, capable of accurately extracting text from images. This tool enables users to easily capture and convert text from images into editable and searchable formats, enhancing accessibility and usability of image-based content.",
                'wall crack detection':    "Developed a Wall Crack Detection application using Python and OpenCV. This tool analyzes images to detect cracks on walls, providing visual indicators of the crack area and its parameters, aiding in timely identification and maintenance of structural issues.",
                'object detection':  "Developed a real-time Yellow Color Object Detection application using Python. This tool utilizes computer vision techniques to identify and track yellow-colored objects in real-time video streams, offering a specialized solution for applications requiring color-specific object recognition.",
            },
            eduDescription: {
                '10th and 12th': "I completed my secondary education at Kendriya Vidyalaya GAIL Jhabua, achieving remarkable results in both my 10th and 12th grades. In my 10th standard, I attained a perfect CGPA of 10, reflecting my dedication and diligence towards academic excellence. This accomplishment was followed by my performance in the 12th grade, where I secured an impressive score of 80%. These achievements not only underscore my commitment to academic success but also demonstrate my ability to adapt and thrive in challenging educational environments. Having completed my 10th grade in 2015 and my 12th grade in 2017, I have built a strong foundation of knowledge and skills that continues to guide me in my pursuit of further academic and professional endeavors.",
                'b.tech': "I successfully completed my Bachelor of Technology degree from Lakshmi Narain College of Technology, located in Indore, with a specialization in Computer Science and Engineering (CSE). Throughout my academic journey in this esteemed institution, I remained deeply engaged in exploring the diverse facets of computer science, including software development, algorithm design, and system analysis. My dedication and hard work were reflected in my academic performance, as I achieved a commendable score of 75%. This accomplishment not only signifies my proficiency in the field of computer science but also highlights my ability to excel in a rigorous academic environment. I completed my B.Tech in 2021, and my time at Lakshmi Narain College of Technology has equipped me with valuable knowledge, skills, and experiences that continue to shape my professional journey and drive my passion for innovation in the realm of technology.",
                'm.tech': "I am currently pursuing my Master of Technology (M.Tech) degree in Software Systems from Birla Institute of Technology and Science (BITS) Pilani. Embarking on this academic endeavor in January 2024, I have been immersing myself in advanced studies focused on software engineering, system architecture, and emerging technologies. The rigorous curriculum at BITS Pilani is designed to provide comprehensive insights into cutting-edge concepts and methodologies relevant to the dynamic field of software systems. Through engaging coursework, research projects, and collaborative initiatives, I am honing my skills and deepening my understanding of complex software development processes, with the aim of becoming a proficient and innovative software engineer. My journey at BITS Pilani reflects my commitment to continuous learning and my aspiration to contribute meaningfully to the ever-evolving landscape of technology.",
                'experience': "With over 2 years of professional experience in full stack development, I have honed my expertise in a range of technologies, particularly Python, Drupal, and React. My journey in software engineering has provided me with valuable insights and hands-on experience in developing robust and scalable web applications. Currently employed at Prodapt Solution Pvt Ltd, I am actively engaged in leveraging my skills to contribute to impactful projects and deliver innovative solutions. My proficiency in Python enables me to develop efficient backend functionalities, while my expertise in Drupal empowers me to create dynamic and user-friendly content management systems. Additionally, my proficiency in React enables me to build interactive and responsive front-end interfaces that enhance user experience. Through my tenure at Prodapt Solution Pvt Ltd, I am continuously enhancing my skills, embracing new technologies, and collaborating with talented teams to drive successful outcomes and exceed client expectations."
            }
        };
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>
                <div className="flex w-full h-5">
                    <div className=" text-ubt-blue">┌──(kunal㉿kali)-[{this.current_directory}] </div>                                                        
                     </div>
                    <div className="flex">
                    <div className=" text-ubt-blue">└─$ </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden ">         
                        <span id={`show-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`terminal-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                    </div>
                <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
            </React.Fragment>
        );

    }

    focusCursor = (e) => {
        clearInterval(this.cursor);
        this.startCursor($(e.target).data("row-id"));
    }

    unFocusCursor = (e) => {
        this.stopCursor($(e.target).data("row-id"));
    }

    startCursor = (id) => {
        clearInterval(this.cursor);
        $(`input#terminal-input-${id}`).trigger("focus");
        // On input change, set current text in span
        $(`input#terminal-input-${id}`).on("input", function () {
            $(`#cmd span#show-${id}`).text($(this).val());
        });
        this.cursor = window.setInterval(function () {
            if ($(`#cursor-${id}`).css('visibility') === 'visible') {
                $(`#cursor-${id}`).css({ visibility: 'hidden' });
            } else {
                $(`#cursor-${id}`).css({ visibility: 'visible' });
            }
        }, 500);
    }

    stopCursor = (id) => {
        clearInterval(this.cursor);
        $(`#cursor-${id}`).css({ visibility: 'visible' });
    }

    removeCursor = (id) => {
        this.stopCursor(id);
        $(`#cursor-${id}`).css({ display: 'none' });
    }

    clearInput = (id) => {
        $(`input#terminal-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let terminal_row_id = $(e.target).data("row-id");
            let command = $(`input#terminal-input-${terminal_row_id}`).val().trim();
            if (command.length !== 0) {
                this.removeCursor(terminal_row_id);
                this.handleCommands(command, terminal_row_id);
            }
            else return;
            // push to history
            this.prev_commands.push(command);
            this.commands_index = this.prev_commands.length - 1;

            this.clearInput(terminal_row_id);
        }
        else if (e.key === "ArrowUp") {
            let prev_command;

            if (this.commands_index <= -1) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index--;
        }
        else if (e.key === "ArrowDown") {
            let prev_command;

            if (this.commands_index >= this.prev_commands.length) return;
            if (this.commands_index <= -1) this.commands_index = 0;

            if (this.commands_index === this.prev_commands.length) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index++;
        }
    }

    childDirectories = (parent) => {
        let files = [];
        files.push(`<div class="flex justify-start flex-wrap">`)
        this.child_directories[parent].forEach(file => {
            files.push(
                `<span class="font-bold mr-2 text-white">'${file}'</span>`
            )
        });
        files.push(`</div>`)
        return files;
    }

    closeTerminal = () => {
        $("#close-terminal").trigger('click');
    }

    handleCommands = (command, rowId) => {
        let words = command.split(' ').filter(Boolean);
        let main = words[0];
        words.shift()
        let result = "";
        let rest = words.join(" ");
        rest = rest.trim();
        switch (main) {
            case "cd":
                if (words.length === 0 || rest === "") {
                    this.current_directory = "~";
                    this.curr_dir_name = "root"
                    break;
                }
                if (words.length > 1) {
                    result = "too many arguments, arguments must me <1.";
                    break;
                }

                if (rest === "personal-documents") {
                    result = `bash /${this.curr_dir_name} : Permission denied 😏`;
                    break;
                }

                if (rest === "projects") {
                    // Display the message in Kali Linux style
                    result = `
                        <pre>Execute 'ls' to list available options. Use 'fetch OPTIONS' to fetch specific details.</pre>
                    `;
                }

                if (rest === "education") {
                    // Display the message in Kali Linux style
                    result = `
                        <pre>Execute 'ls' to list available options. Use 'get OPTIONS' to get specific details.</pre>
                    `;
                }

                if (this.child_directories[this.curr_dir_name].includes(rest)) {
                    this.current_directory += "/" + rest;
                    this.curr_dir_name = rest;
                }
                else if (rest === ".." || rest === "../") {
                    result = "Type 'cd' to go back 😅";
                    break;
                }
                else {
                    result = `bash: cd: ${words}: No such file or directory`;
                }
                break;

            case "fetch":
                // Handle fetch command
                let projectName = rest.toLowerCase(); // Extract the project name from the command
                let myProjects = this.child_directories.projects.map(project => project.toLowerCase());
                console.log(myProjects);
                if (myProjects.includes(projectName)) {
                    // Display project details based on the selected project
                    let description = this.child_directories.projDesciption[projectName];
                    let descriptionLines = description.split("\n").map((line, index) => (
                        <div key={index} className="flex w-full text-white">{line}</div>
                    ));
                    console.log(descriptionLines); // Log descriptionLines to the console
                    let terminal = this.state.terminal;
                    terminal.push(
                        <div key={this.terminal_rows} className="flex my-2 font-normal">
                            Fetching details for project: {projectName.charAt(0).toUpperCase() + projectName.slice(1)}
                        </div>
                    );
                    descriptionLines.forEach((line, index) => {
                        terminal.push(
                            <div key={`${this.terminal_rows}-${index}`} className="flex my-2 font-normal">{line}</div>
                        );
                    });
                    this.setState({ terminal });
                    this.terminal_rows += descriptionLines.length + 1;
                } else {
                    // Project not found
                    let terminal = this.state.terminal;
                    terminal.push(
                        <div key={this.terminal_rows} className="flex w-full text-ubt-blue">
                            Project '{projectName}' not found.
                        </div>
                    );
                    this.setState({ terminal });
                    this.terminal_rows++;
                }
                break;

            case "get":
                // Handle fetch command
                let education = rest.toLowerCase(); // Extract the project name from the command
                let myEducation = this.child_directories.education.map(education => education.toLowerCase());
                console.log(myEducation);
                if (myEducation.includes(education)) {
                    // Display project details based on the selected project
                    let description = this.child_directories.eduDescription[education];
                    let descriptionLines = description.split("\n").map((line, index) => (
                        <div key={index} className="flex w-full text-white">{line}</div>
                    ));
                    console.log(descriptionLines); // Log descriptionLines to the console
                    let terminal = this.state.terminal;
                    terminal.push(
                        <div key={this.terminal_rows} className="flex my-2 font-normal">
                            Getting details : {education.charAt(0).toUpperCase() + education.slice(1)}
                        </div>
                    );
                    descriptionLines.forEach((line, index) => {
                        terminal.push(
                            <div key={`${this.terminal_rows}-${index}`} className="flex my-2 font-normal">{line}</div>
                        );
                    });
                    this.setState({ terminal });
                    this.terminal_rows += descriptionLines.length + 1;
                } else {
                    // Project not found
                    let terminal = this.state.terminal;
                    terminal.push(
                        <div key={this.terminal_rows} className="flex w-full text-ubt-blue">
                            Education '{education}' not found.
                        </div>
                    );
                    this.setState({ terminal });
                    this.terminal_rows++;
                }
                break;    

            case "ls":
                let target = words[0];
                if (target === "" || target === undefined || target === null) target = this.curr_dir_name;

                if (words.length > 1) {
                    result = "too many arguments, arguments must me <1.";
                    break;
                }
                if (target in this.child_directories) {
                    result = this.childDirectories(target).join("");
                }
                else if (target === "personal-documents") {
                    result = "Nope! 🙃";
                    break;
                }
                else {
                    result = `ls: cannot access '${words}': No such file or directory                    `;
                }
                break;
            case "mkdir":
                if (words[0] !== undefined && words[0] !== "") {
                    this.props.addFolder(words[0]);
                    result = "";
                } else {
                    result = "mkdir: missing operand";
                }
                break;
            case "pwd":
                let str = this.current_directory;
                result = str.replace("~", "[/home/ali/")
                break;
            case "code":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("vscode");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands:[ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg]";
                }
                break;
            case "echo":
                result = this.xss(words.join(" "));
                break;
            case "spotify":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("spotify");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "chrome":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("chrome");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "trash":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("trash");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "about-kunal":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("about-kunal");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "terminal":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("terminal");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "settings":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("settings");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "sendmsg":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("gedit");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
                }
                break;
            case "clear":
                this.reStartTerminal();
                return;
            case "exit":
                this.closeTerminal();
                return;
            case "sudo":

                ReactGA.event({
                    category: "Sudo Access",
                    action: "lol",
                });

                result = "<img class=' w-2/5' src='./images/memes/used-sudo-command.webp' />";
                break;
            default:
                result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, echo, clear, exit, mkdir, code, spotify, chrome, about-kunal, trash, settings, sendmsg ]";
        }
        document.getElementById(`row-result-${rowId}`).innerHTML = result;
        this.appendTerminalRow();
    }

    xss(str) {
        if (!str) return;
        return str.split('').map(char => {
            switch (char) {
                case '&':
                    return '&amp';
                case '<':
                    return '&lt';
                case '>':
                    return '&gt';
                case '"':
                    return '&quot';
                case "'":
                    return '&#x27';
                case '/':
                    return '&#x2F';
                default:
                    return char;
            }
        }).join('');
    }

    render() {
        return (
            <div className="h-full w-full bg-ub-grey-500 text-white text-sm font-bold" id="terminal-body">
                {
                    this.state.terminal
                }
            </div>
        )
    }
}

export default Terminal

export const displayTerminal = (addFolder, openApp) => {
    return <Terminal addFolder={addFolder} openApp={openApp}> </Terminal>;
}
