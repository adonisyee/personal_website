import {useRef, useContext, useEffect} from 'react'
import useOnScreen from './useOnScreen'
import {NavContext} from "../Context"

export default function useNav(activeId) {
	const ref = useRef(null)
    const {setActiveId} = useContext(NavContext)
	const isOnScreen = useOnScreen(ref)

	useEffect(() => {
		if (isOnScreen) {
			setActiveId(activeId)
		}
	}, [isOnScreen, setActiveId, activeId])

	return ref
}
