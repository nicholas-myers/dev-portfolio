import { IconContext } from "react-icons";
import { Direction } from "../models/Orientation"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SocialLinkProps {
    direction: Direction;
}

const SocialLinks = ({ direction }: SocialLinkProps) => {

    const copyEmail = () => {
        var email = "korefucius00@gmail.com";
        navigator.clipboard.writeText(email)
        alert("Email: " + email + " copied to clipboard.")
    }
    return (
        <div className={`social-links ${direction}`}>
            <IconContext.Provider value={{ size: "3em" }}>
                <a href="https://www.linkedin.com/in/nicholas-myers-professional/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/nicholas-myers" target="_blank">
                    <FaGithubSquare />
                </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "3.8em" }}>
                <div className="email" onClick={() => copyEmail()}>
                    <MdEmail />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default SocialLinks
