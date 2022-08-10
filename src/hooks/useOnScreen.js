import {useState, useEffect} from 'react'

export default function useOnScreen(ref) {
	const [isOnScreen, setOnScreen] = useState(false)

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0.5, 0.75, 1] 
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
