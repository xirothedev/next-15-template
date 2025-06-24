"use client"

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export default function ProgressDemo() {
  const [progress, setProgress] = useState<number>(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
