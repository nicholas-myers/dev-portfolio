import { Direction } from "../models/Orientation"
import SocialLinks from "./SocialLinks"
import Wing from "./Wing"

const Header = () => {
    return (
        <header>
            <h1>Nick Myers</h1>
            <Wing content={<SocialLinks direction={"row"} />} />
        </header>
    )
}

export default Header