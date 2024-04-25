import { displayTerminal } from './components/apps/terminal';
import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayRootTerminal } from './components/apps/root-terminal';
import { displaySettings } from './components/apps/settings';
import { displayFirefox } from './components/apps/firefox';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutKunal } from './components/apps/kunal';
import { displayTerminalCalc } from './components/apps/calc';
import { displayMetasploit } from './components/apps/metasploit';
import { displayVlc } from './components/apps/vlc';
import { displayGithub } from './components/apps/github';
import { displayNeofetch } from './components/apps/neofetch';
import { displaySqlmap } from './components/apps/sqlmap';
import { displayDisqusComments } from './components/apps/messaging-app';
import { displayTextEditor } from './components/apps/editor';
import { displayWeather } from './components/apps/weather';
import { displayApache } from './components/apps/apache';
import  displayHtml  from './components/apps/html';

const apps = [
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Flat-Remix-Blue-Dark/apps/qterminal.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "about-kunal",
        title: "About Kunal",
        icon: './themes/Flat-Remix-Blue-Dark/system/user-home.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutKunal,
    },
    {
        id: "firefox",
        title: "Fire Fox",
        icon: './themes/Flat-Remix-Blue-Dark/apps/firefox.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayFirefox,
    },
    {
        id: "metasploit",
        title: "Metasploit",
        icon: './themes/Flat-Remix-Blue-Dark/apps/kali-metasploit-framework.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayMetasploit,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Flat-Remix-Blue-Dark/apps/chrome.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "root-terminal",
        title: "Root Terminal",
        icon: './themes/Flat-Remix-Blue-Dark/apps/root-terminal.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayRootTerminal,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Flat-Remix-Blue-Dark/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Flat-Remix-Blue-Dark/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Flat-Remix-Blue-Dark/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Flat-Remix-Blue-Dark/apps/settings.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Flat-Remix-Blue-Dark/system/user-trash-full.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Flat-Remix-Blue-Dark/apps/gedit.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "index-html",
        title: "index.html",
        icon: './themes/filetypes/html.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayHtml,
    },
    {
        id: "vlc",
        title: "Vlc",
        icon: './themes/Flat-Remix-Blue-Dark/apps/vlc.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayVlc,
    },
    {
        id: "github",
        title: "Github",
        icon: './themes/Flat-Remix-Blue-Dark/apps/github-desktop.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayGithub,
    },
    {
        id: "neofetch",
        title: "Neofetch",
        icon: './themes/Flat-Remix-Blue-Dark/apps/neofetch.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayNeofetch,
    },
    {
        id: "sqlmap",
        title: "Sqlmap",
        icon: './themes/Flat-Remix-Blue-Dark/apps/sqlmap.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displaySqlmap,
    },
    {
        id: "message",
        title: "Message",
        icon: './themes/Flat-Remix-Blue-Dark/apps/messaging-app.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayDisqusComments,
    },
    {
        id: "weather",
        title: "Weather",
        icon: './themes/Flat-Remix-Blue-Dark/apps/weather-app.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayWeather,
    },
    {
        id: "editor",
        title: "Text-Editor",
        icon: './themes/Flat-Remix-Blue-Dark/apps/text-editor.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTextEditor,
    },
    {
        id: "apache",
        title: "Apache",
        icon: './themes/Flat-Remix-Blue-Dark/apps/kali-apache-users.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayApache,
    }
]

export default apps;