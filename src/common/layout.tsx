import { Outlet } from 'react-router'
import { BackgroundGrid } from './background'

export const Layout = () => {
    return (
        <>
            <BackgroundGrid/>
            <header>
                <h1>Portfolio 2.0</h1>
            </header>
            <nav>
                {/* Nav goes here */}
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>2025 - Carlos Garita Campos Portfolio</p>
            </footer>
        </>
    )
}