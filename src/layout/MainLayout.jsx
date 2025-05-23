import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Outlet />
        </div>
    )
}

export default MainLayout
