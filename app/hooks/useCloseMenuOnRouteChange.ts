"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useCloseMenuOnRouteChange(closeMenu: () => void) {
  const pathname = usePathname()

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])
}
