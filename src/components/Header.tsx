import AccessibilityLeft from "./AccessibilityLeft"
import Wing from "./Wing"

const Header = () => {
    return (
        <header>
            <Wing content={<AccessibilityLeft />} />
            <h1>Nick Myers</h1>
        </header>
    )
}

export default Header