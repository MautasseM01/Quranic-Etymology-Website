import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function WordCardSkeleton() {
  return (
    <Card className="border-blue-100 animate-pulse">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-24"></div>
          <div className="h-5 bg-gray-200 rounded w-12"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-32 mt-2"></div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </CardContent>
    </Card>
  )
}

export function HeroSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-16 bg-gray-200 rounded mb-6 max-w-4xl mx-auto"></div>
      <div className="h-6 bg-gray-200 rounded mb-12 max-w-2xl mx-auto"></div>
      <div className="h-48 bg-gray-200 rounded max-w-2xl mx-auto"></div>
    </div>
  )
}
