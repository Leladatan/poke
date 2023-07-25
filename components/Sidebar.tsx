"use client";

import {type FC} from 'react';
import {BookOpen, Globe, LucideIcon} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import Image from "next/image";

interface routes {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
}

const routes = [
    {
        label: "Poke List",
        icon: BookOpen,
        href: "/pokelist",
        color: "text-violet-500",
    },
    {
        label: "Location List",
        icon: Globe,
        href: "/locationlist",
        color: "text-sky-500",
    },
]

const Sidebar: FC = () => {
    const pathname: string = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="flex flex-col gap-y-2 px-3 py-2 flex-1">
                <Link href="/" className="flex items-center gap-x-2 pl-3 md-14">
                    <Image width={50} height={50} src="/logo.png" alt="Logo" />
                    <h1 className="text-violet-400 text-2xl">Pokemon</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map(route => (
                        <Link href={route.href} key={route.href}
                              className={cn("text-sm group flex p-3 w-full justify-start " +
                                  "font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                  pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                              )}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                <h2>{route.label}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
