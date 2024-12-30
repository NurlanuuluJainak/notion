import Image from "next/image"

export const Logo = () => {
    return (
        <div className="flex items-center gap-x-2">
            <Image
                alt="Logo"
                src={"/logo.svg"}
                width={50}
                height={50}
                className="object-cover dark:hidden"
            />
            <Image
                src={'/logo.dark.svg'}
                alt="Logo"
                width={50}
                height={50}
                className="object-cover hidden dark:block"
            />
            <p className="font-semibold">Notion</p>
        </div>
    )
}