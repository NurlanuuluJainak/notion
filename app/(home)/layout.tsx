import { ChildProps } from "@/types";
import { Navbar } from "./components";

export default function layout({ children }: ChildProps) {
    return (

        <div>
            <Navbar />
            <div className="h-full pt-40">{children}</div>
        </div>
    )
}