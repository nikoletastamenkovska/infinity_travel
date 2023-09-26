import { useEffect, useState } from "react";


function UseScreenSize() {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return screenWidth
}
export default UseScreenSize

