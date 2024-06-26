import GitHubLogo from "./logos/GitHubLogo";
import LinkedInLogo from "./logos/LinkedInLogo";
import SpotifyLogo from "./logos/SpotifyLogo";
import Script from 'next/script'

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

const HeadBar = () => {
    return (
        <header className="my-2 w-screen h-12 bg-[#333533] rounded-full flex flex-row place-self-start
        fixed border-transparent z-50">
            <div className="flex w-screen">
                <p className="w-auto text-[#F5CB5C] font-mono ml-16 mx-4 text-xl self-center hidden lg:block ">
                </p>
                <div className="flex m-auto lg:mr-4 space-x-4 w-auto justify-evenly lg:justify-end">
                    <GitHubLogo />
                    <LinkedInLogo />
                    <SpotifyLogo />        
                </div>

                {/* Hamburger Menu */}
                <Script src="/scripts/menuOnClick.js"/>
                <div id="menu">
                    <div id="menu-bar" onClick={menuOnClick}>
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
                    <nav className="nav" id="nav">
                        <ul className="overflow-hidden">
                        <li><a href="#">Home</a></li>
                        <li><a href="#career">Career</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href=''>Resume</a></li>
                        </ul>
                    </nav> 
                </div>
                <div className="menu-bg" id="menu-bg"></div>
            </div>
        </header>
    );
};

export default HeadBar;