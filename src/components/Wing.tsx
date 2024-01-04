'use client'
import {useState, useEffect} from "react"
type WindowSide = "left" | "right"

const Wing = ({ side, content, toggleContent, offset }: { side: WindowSide, content: any, toggleContent: any, offset: boolean }) => {
    const [isOffset, setIsOffset] = useState<boolean>(offset)
    const offsetStyle = isOffset ? `offset-${side}`: `${side}-zero`;

    const [styles, setStyles] = useState<string>(`wing ${offsetStyle}`)
    
    useEffect(() => {

    }, [styles, isOffset])

    const toggleOffset = () => {
        setIsOffset(!isOffset)
        setStyles(`wing ${offsetStyle}`)
    }
    return (
        <div className="wing-outer">
            <div className={styles}>

            </div>
            {
                side === "right" && 
                (
                    <>
                        <button onClick={toggleOffset}>{toggleContent}</button>
                        {content}
                    </>   
                )
            }
            {
                side === "left" && 
                (
                    <>
                        {content}
                        <button onClick={toggleOffset}>{toggleContent}</button>
                    </>   
                )
            }
        </div>
    )
}

export default Wing