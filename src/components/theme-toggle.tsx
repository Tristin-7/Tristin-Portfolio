"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "matrix" ? "professional" : "matrix")
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-switch">
        {theme === "matrix" ? "Professional Mode" : "Matrix Mode"}
      </Label>
      <Switch
        id="theme-switch"
        checked={theme !== "matrix"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
    </div>
  )
}
