'use client'

import { ModeToggle } from "@/components/shared/ModeToggle"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/use-scrolled"

export const Navbar = () => {

    const scrolled = useScrolled()

    console.log(scrolled, 'ldskjs')
    return (
        <div className={`z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between ${scrolled && 'border-b shadow-sm'}`}>
            <Logo />
            <div className="flex items-center gap-x-2 ">
                <Button size={'sm'} variant={'ghost'}>Log In</Button>
                <Button size={'sm'}>Get Notion Free</Button>
                <ModeToggle />
            </div>
        </div>
    )
}