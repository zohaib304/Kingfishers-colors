import * as React from "react"

import backgroundImage from "@/assets/background.png"
import { cn } from "@/lib/utils"

interface MobileFrameProps {
  children: React.ReactNode
  className?: string
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/20 px-4 py-6">
      <div
        className={cn(
          "relative w-full max-w-93.75 overflow-hidden rounded-[28px] border border-black/5",
          "ring-1 ring-black/5 dark:ring-white/5",
          className,
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "min(780px, calc(100vh - 3rem))",
        }}
      >
        <div className="h-full w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
