import profilepic from "../data/profilepic.jpg"

const About = () => {
return (
    <div className="about-container">
        <img src={profilepic}/>
        <p>Hi, my name is Nicholas Myers, I go by Nick! I'm a full stack developer living in the Pacific Northwest. Husband, Father, Christian, Geek, Korean.</p>
        <p>I love technology, preferring to build my own computers and learn how things work on my own. I love finding solutions to problems through code.</p>
    </div>
)
}

export default About