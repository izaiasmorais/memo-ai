"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarItemProps {
  href: string
  icon: LucideIcon
  label: string
}

export function NavbarItem({ href, icon: Icon, label }: NavbarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
        "hover:bg-gray-100 hover:text-gray-900",
        isActive ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:text-gray-900",
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  )
}
