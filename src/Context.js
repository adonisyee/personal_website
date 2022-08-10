import React, { useState } from 'react'

const NavContext = React.createContext()

function NavProvider({ children }) {
    const [activeId, setActiveId] = useState('')

	const providerValue = {
		activeId,
		setActiveId,
	}

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	)
}

export {NavProvider, NavContext}
