"use client"

import { useRouter } from "next/navigation";
import NewChat from "./NewChat"

function SideBar() {
    const router = useRouter()


    return <div className="p-2 flex flex-col h-screen">
    <div className="flex-1">
        <div>
            <NewChat/>  
            <div>

            </div>
        </div>

    </div>

    </div>
}

export default SideBar;