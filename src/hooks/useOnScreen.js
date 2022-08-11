import {useState, useEffect} from 'react'

export default function useOnScreen(ref) {
	const [isOnScreen, setOnScreen] = useState(false)

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8] 
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
