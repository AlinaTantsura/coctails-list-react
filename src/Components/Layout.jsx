import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { Suspense } from "react"
import { Container } from "./Container.styled"

export const Layout = () => {
    return (
        <>
            <Header />
            <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
            </Container>
        </>
    )
}