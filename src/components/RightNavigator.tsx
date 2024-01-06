'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const RightNavigator = () => {
    const pathname = usePathname()
    const links = ["/", "/projects", "/skills"]
    const [rightLink, setRightLink] = useState<string>("")
    useEffect(() => {
        links.forEach((l, i) => {
            if (pathname === l) {
                if (i != links.length - 1) {
                    const newLink = links[i+1]
                    setRightLink(newLink)
                }
            }
        })
    }, [rightLink])
    return (
        <div>
            <a href={rightLink} className="">right</a>
        </div>
    )
}

export default RightNavigator