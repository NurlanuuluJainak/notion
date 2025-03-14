'use client'

import { ModeToggle } from "@/components/shared/ModeToggle"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import Link from "next/link"
import { Loader } from "@/components/ui/loader"

export const Navbar = () => {

    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrolled()

    return (
        <div className={`z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between ${scrolled && 'border-b shadow-sm'}`}>
            <Logo />
            <div className="flex items-center gap-x-2 ">
                {isLoading && <Loader />}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button size={'sm'} variant={'ghost'}>Log In</Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size={'sm'}>Get Notion Free</Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant='ghost' size={'sm'}>
                            <Link href={"/documents"}>Enter Notion</Link>
                        </Button>
                        <UserButton afterSignOutUrl="/" />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}