import AccessibilityRight from "./AccessbilityRight"
import AccessibilityLeft from "./AccessibilityLeft"
import Wing from "./Wing"

const Header = () => {
    return (
        <header>
            <Wing content={<AccessibilityLeft />} />
            <h1>Nick Myers</h1>
            <Wing content={<AccessibilityRight />} />
        </header>
    )
}

export default Header