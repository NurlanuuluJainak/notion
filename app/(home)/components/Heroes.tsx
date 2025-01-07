"use client"

import { Button } from "@/components/ui/button"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Heroes = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    return (
        <>
            <div className="max-w-3xl space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                    The happier workspace
                </h1>
                <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                    Write. Plan. Collaborate. With a little help from AI.
                </h3>

                {isAuthenticated && !isLoading && (
                    <Button asChild>
                        <Link href={'/documents'}>
                            Enter notion <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                )}

                {!isAuthenticated && !isLoading && (
                    <>
                        <Button asChild>
                            Enter notion <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>

                    </>
                )}
            </div>
            <div className="flex flex-col items-center justify-center max-w-5xl">
                <div className="flex items-center">
                    <div className="relative h-[400px] w-[400px] hidden md:block">
                        <Image
                            alt="Logo"
                            src={"/men.svg"}
                            fill
                            className="object-cover dark:hidden"
                        />
                        <Image
                            src={'/men-dark.svg'}
                            alt="Logo"
                            fill
                            className="object-cover hidden dark:block"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}