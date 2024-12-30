import { Button } from "@/components/ui/button"
import { PricingCardsProps } from "@/interface/pricing"
import { ArrowRight, Check } from "lucide-react"

export const PricingCards = ({ title, subtitle, options, price }: PricingCardsProps) => {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-50 rounded-lg border border-gray-100 shadow  dark:border-gray-600 xl:p-8 dark:bg-black dark:hover:bg-gray-900 transition-all dark:text-white ">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {subtitle}
            </p>

            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                    {price !== "Free" && "$"}
                    {price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <Button>Get Started</Button>

            <ul role="list" className="space-y-4 text-left mt-8">
                {options.split(", ").map((option) => (
                    <li key={option} className="flex items-center   space-x-3">
                        <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                        <span>{option}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}