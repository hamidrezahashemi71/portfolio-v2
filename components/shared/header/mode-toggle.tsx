"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa"
import { FaSun } from "react-icons/fa6"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle(props: ModeProps) {

    const { mode: { dark, light, system }, lang } = props
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="lg" className="outline-none" >
                    <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
                    <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"}>
                <DropdownMenuItem style={{ justifyContent: lang === "fa" ? "flex-end" : "flex-start" }} onClick={() => setTheme("light")}>
                    {light}
                </DropdownMenuItem>
                <DropdownMenuItem style={{ justifyContent: lang === "fa" ? "flex-end" : "flex-start" }} onClick={() => setTheme("dark")}>
                    {dark}
                </DropdownMenuItem>
                <DropdownMenuItem style={{ justifyContent: lang === "fa" ? "flex-end" : "flex-start" }} onClick={() => setTheme("system")}>
                    {system}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
