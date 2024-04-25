import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga';
import emailjs from '@emailjs/browser';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
            messageSent: false,
        }
    }

    componentDidMount() {
        emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    sendMessage = async () => {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();

        name = name.trim();
        message = message.trim();

        let error = false;

        if (name.length === 0) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Name must not be Empty!");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Message must not be Empty!");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true });

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_USER_ID;
        const templateParams = {
            'name': name,
            'message': message,
        }
    
        emailjs.send(serviceID, templateID, {
            from_name: templateParams.name,
            to_name: "Kunal",
            message: templateParams.message,
            }).then(() => {
            this.setState({ sending: false, messageSent: true });
            setTimeout(() => { // Delay closing the component for 2 seconds after showing success message
                $("#close-gedit").trigger("click");
            }, 2000);
        }).catch((error) => {
            console.log(error);
            this.setState({ sending: false });
            $("#close-gedit").trigger("click");
        })

        ReactGA.event({
            category: "Send Message",
            action: `${name}, ${message}`
        });

    }

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
                    <span className="font-bold ml-2">Send a Message to Me</span>
                    <div className="flex">
                        <div onClick={this.sendMessage} className="border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80">Send</div>
                    </div>
                </div>
                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen">
                    <div className="absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker"></div>
                    <div className="relative">
                        <input id="sender-name" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="Your Email :" spellCheck="false" autoComplete="off" type="text" />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
                    </div>
                    
                    <div className="relative flex-grow">
                        <textarea id="sender-message" className=" w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent" placeholder="Message" spellCheck="false" autoComplete="none" type="text" />
                        <span className="absolute left-1 top-1 font-bold  text-sm text-ubt-gedit-blue">2</span>
                    </div>
                </div>
                {
                    this.state.sending && (
                        <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
                            <img className={" w-8 absolute animate-spin"} src="./themes/Flat-Remix-Blue-Dark/status/logo_1.png" alt="Kali Process Symbol" />
                        </div>
                    )
                }
                {this.state.messageSent && (
                    <div className="success-message">
                        <i className="fas fa-check-circle"></i>
                        <span>Message Sent Successfully!</span>
                    </div>
                )}
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}
