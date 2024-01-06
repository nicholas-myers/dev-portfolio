'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const LeftNavigator = () => {
    const pathname = usePathname()
    const links = ["/", "/projects", "/skills"]
    const [leftLink, setLeftLink] = useState<string>("")
    useEffect(() => {
        links.forEach((l, i) => {
            if (pathname === l) {
                if (i != 0) {
                    const newLink = links[i-1]
                    setLeftLink(newLink)
                }
            }
        })
    }, [leftLink])
    return (
        <div>
            <a href={leftLink} className="">left</a>
        </div>
    )
}

export default LeftNavigator