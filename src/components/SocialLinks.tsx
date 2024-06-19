import { IconContext } from "react-icons";
import { Direction } from "../models/Orientation"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SocialLinkProps {
    direction: Direction;
}

const SocialLinks = ({ direction }: SocialLinkProps) => {
    return (
        <div className={`social-links ${direction}`}>
            <IconContext.Provider value={{ size: "3em" }}>
                <a href="" target="_blank"></a>
                <a href="" target="_blank"></a>
                <FaLinkedin />
                <FaGithubSquare />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "3.8em" }}>
                <MdEmail />
            </IconContext.Provider>

        </div>
    )
}

export default SocialLinks
