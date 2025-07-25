"use client"

import { Card } from "@/components/ui/card"

interface SearchResult {
  word: string
  meaning: string
  root: string
}

interface SearchDropdownProps {
  results: SearchResult[]
  isVisible: boolean
  isArabic: boolean
  onSelect: (word: string) => void
}

export function SearchDropdown({ results, isVisible, isArabic, onSelect }: SearchDropdownProps) {
  if (!isVisible || results.length === 0) return null

  return (
    <Card
      className={`absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg border border-blue-200 z-50 max-h-60 overflow-y-auto ${isArabic ? "text-right" : "text-left"}`}
    >
      {results.map((result, index) => (
        <div
          key={index}
          className="p-3 hover:bg-blue-50 cursor-pointer border-b border-blue-100 last:border-b-0 transition-colors duration-200"
          onClick={() => onSelect(result.word)}
        >
          <div className={`font-semibold text-blue-900 ${isArabic ? "font-arabic text-lg" : ""}`}>{result.word}</div>
          <div className={`text-sm text-gray-600 ${isArabic ? "font-arabic" : ""}`}>
            {result.meaning} • {isArabic ? "الجذر:" : "Root:"} {result.root}
          </div>
        </div>
      ))}
    </Card>
  )
}
