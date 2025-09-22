"use client"

import Link from "next/link";
import {Heart} from "lucide-react";


export default function navBar() {
    return(
        <div className="absolute top-0 w-[100%] h-20 bg-white drop-shadow-amber-100 flex items-center justify-between">
            <div className="text-[var(--text-primary)] text-2xl font-bold w-fit h-fit ml-10">
                <p>Recipe Book</p>
            </div>
            <div className="s:hidden lg:w-[25vw] text-[var(--text-secondary)] flex justify-between  ">
                <Link className="hover:text-[var(--primary)] hover:scale-105" href={''}>Home</Link>
                <Link className="hover:text-[var(--primary)] hover:scale-105" href={''}>Trending</Link>
                <Link className="hover:text-[var(--primary)] hover:scale-105" href={''}>About</Link>
            </div>
            <div className="w-fit flex justify-between mr-10 text-[var(--text-secondary)] ">
                <Heart className="hover:text-[var(--primary)] hover:scale-105" />
            </div>
        </div>
    )
}