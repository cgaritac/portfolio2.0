import { BrowserRouter, Routes, Route } from 'react-router';

import { Layout } from '../common/layout'
import { Home } from '../pages/home'

export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}