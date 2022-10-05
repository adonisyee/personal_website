import {useState, useEffect} from 'react'
import useWindowWidth from "./useWindowWidth"

export default function useOnScreen(ref) {
	const [isOnScreen, setOnScreen] = useState(false)
	const windowWidth = useWindowWidth()

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			 threshold: windowWidth > 600 ? [0.5] : [0.3]
		}
	)

	useEffect(() => {
		observer.observe(ref.current)
		return () => {
			observer.disconnect()
		}
	})

	return isOnScreen
}
