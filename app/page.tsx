"use client"

import { useState } from "react"
import { Search, BookOpen, BarChart3, Play, Award, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from "react"

export default function HomePage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const isArabic = language === "ar"

  const content = {
    ar: {
      title: "مستكشف علم الاشتقاق القرآني",
      tagline: "اكتشف المعاني العميقة وراء كل كلمة قرآنية",
      description: "منصة أكاديمية متخصصة في دراسة أصول الكلمات القرآنية وتطورها اللغوي عبر التاريخ",
      searchPlaceholder: "ابحث عن كلمة قرآنية...",
      featuredWord: "الرحمن",
      featuredWordMeaning: "اسم من أسماء الله الحسنى، مشتق من الرحمة",
      featuredWordRoot: "ر-ح-م",
      features: {
        etymology: {
          title: "تحليل الاشتقاق",
          description: "دراسة شاملة لأصول الكلمات وتطورها",
        },
        frequency: {
          title: "إحصائيات التكرار",
          description: "تحليل تكرار الكلمات في القرآن الكريم",
        },
        video: {
          title: "التعلم المرئي",
          description: "شروحات مرئية من علماء متخصصين",
        },
      },
      latestWords: "أحدث الكلمات المدروسة",
      footer: {
        academic: "بحث أكاديمي معتمد",
        scholars: "علماء متخصصون",
        verified: "محتوى موثق",
      },
    },
    en: {
      title: "Quranic Etymology Explorer",
      tagline: "Discover the Deep Meanings Behind Every Quranic Word",
      description:
        "An academic platform specialized in studying the origins and linguistic evolution of Quranic words throughout history",
      searchPlaceholder: "Search for a Quranic word...",
      featuredWord: "Ar-Rahman",
      featuredWordMeaning: "One of the Beautiful Names of Allah, derived from mercy",
      featuredWordRoot: "R-Ḥ-M",
      features: {
        etymology: {
          title: "Etymology Analysis",
          description: "Comprehensive study of word origins and evolution",
        },
        frequency: {
          title: "Frequency Insights",
          description: "Analysis of word repetition in the Holy Quran",
        },
        video: {
          title: "Video Learning",
          description: "Visual explanations from specialized scholars",
        },
      },
      latestWords: "Latest Studied Words",
      footer: {
        academic: "Accredited Academic Research",
        scholars: "Specialized Scholars",
        verified: "Verified Content",
      },
    },
  }

  // Search suggestions for Arabic words
  const searchSuggestions = [
    { word: "الرحمن", meaning: "The Most Merciful", root: "ر-ح-م" },
    { word: "الصبر", meaning: "Patience", root: "ص-ب-ر" },
    { word: "الحكمة", meaning: "Wisdom", root: "ح-ك-م" },
    { word: "التقوى", meaning: "Piety", root: "و-ق-ي" },
    { word: "الرحمة", meaning: "Mercy", root: "ر-ح-م" },
    { word: "العدل", meaning: "Justice", root: "ع-د-ل" },
    { word: "الشكر", meaning: "Gratitude", root: "ش-ك-ر" },
    { word: "الإيمان", meaning: "Faith", root: "أ-م-ن" },
  ]

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 0) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const filtered = searchSuggestions.filter(
          (item) =>
            item.word.includes(query) ||
            item.meaning.toLowerCase().includes(query.toLowerCase()) ||
            item.root.includes(query),
        )
        setSearchResults(filtered)
        setShowSearchResults(true)
        setIsLoading(false)
      }, 300)
    } else {
      setShowSearchResults(false)
      setSearchResults([])
    }
  }

  // Close search results when clicking outside
  const handleClickOutside = () => {
    setShowSearchResults(false)
  }

  // Add click outside listener
  React.useEffect(() => {
    if (showSearchResults) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [showSearchResults])

  const currentContent = content[language]

  const latestWords = [
    { word: "الصبر", meaning: "Patience", root: "ص-ب-ر", frequency: 103 },
    { word: "الحكمة", meaning: "Wisdom", root: "ح-ك-م", frequency: 20 },
    { word: "التقوى", meaning: "Piety", root: "و-ق-ي", frequency: 258 },
    { word: "الرحمة", meaning: "Mercy", root: "ر-ح-م", frequency: 79 },
    { word: "العدل", meaning: "Justice", root: "ع-د-ل", frequency: 28 },
    { word: "الشكر", meaning: "Gratitude", root: "ش-ك-ر", frequency: 75 },
  ]

  // Loading skeleton component
  const WordCardSkeleton = () => (
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

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Geometric Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231e3a8a' fillOpacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15H0l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h1 className={`font-bold text-blue-900 ${isArabic ? "text-lg font-arabic" : "text-xl"}`}>
                  {currentContent.title}
                </h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8 relative">
              <div className="relative">
                <Search className={`absolute top-3 w-4 h-4 text-gray-400 ${isArabic ? "right-3" : "left-3"}`} />
                <Input
                  type="text"
                  placeholder={currentContent.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`w-full ${isArabic ? "pr-10 text-right font-arabic" : "pl-10"} bg-white/90 border-blue-200 focus:border-amber-400`}
                  dir={isArabic ? "rtl" : "ltr"}
                />
                {isLoading && (
                  <div className={`absolute top-3 w-4 h-4 ${isArabic ? "left-3" : "right-3"}`}>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div
                  className={`absolute top-full mt-1 w-full bg-white rounded-lg shadow-lg border border-blue-200 z-50 max-h-60 overflow-y-auto ${isArabic ? "text-right" : "text-left"}`}
                >
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-blue-50 cursor-pointer border-b border-blue-100 last:border-b-0"
                      onClick={() => {
                        setSearchQuery(result.word)
                        setShowSearchResults(false)
                      }}
                    >
                      <div className={`font-semibold text-blue-900 ${isArabic ? "font-arabic text-lg" : ""}`}>
                        {result.word}
                      </div>
                      <div className={`text-sm text-gray-600 ${isArabic ? "font-arabic" : ""}`}>
                        {result.meaning} • {isArabic ? "الجذر:" : "Root:"} {result.root}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button
                variant={language === "ar" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("ar")}
                className="bg-blue-800 hover:bg-blue-900 text-white font-arabic"
              >
                العربية
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="bg-blue-800 hover:bg-blue-900 text-white"
              >
                English
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2
            className={`mb-6 text-blue-900 leading-tight ${isArabic ? "text-4xl md:text-6xl arabic-text font-bold" : "text-5xl md:text-7xl font-bold"}`}
          >
            {currentContent.tagline}
          </h2>
          <p
            className={`mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed ${isArabic ? "text-xl arabic-text" : "text-lg"}`}
          >
            {currentContent.description}
          </p>

          {/* Featured Word Card */}
          <Card className="max-w-2xl mx-auto mb-16 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white border-0 shadow-2xl overflow-hidden relative">
            {/* Decorative Islamic Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fillOpacity='0.3'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 0l10 10H0l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <CardHeader className="pb-4 relative z-10">
              <div className="text-center">
                <div
                  className={`mb-4 ${isArabic ? "text-7xl md:text-8xl arabic-text font-bold" : "text-6xl md:text-7xl font-bold"} text-amber-400 drop-shadow-lg`}
                  style={{
                    textShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
                    fontWeight: "700",
                    letterSpacing: isArabic ? "0.05em" : "normal",
                  }}
                >
                  {currentContent.featuredWord}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-amber-400/20 text-amber-200 border-amber-400/30 arabic-numbers text-sm px-3 py-1"
                >
                  {isArabic ? "الجذر:" : "Root:"} {currentContent.featuredWordRoot}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p
                className={`${isArabic ? "font-arabic text-xl" : "text-lg"} text-blue-100 text-center leading-relaxed`}
              >
                {currentContent.featuredWordMeaning}
              </p>
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="bg-white/10 border-amber-400/50 text-amber-200 hover:bg-amber-400/20 hover:text-white transition-all duration-300"
                >
                  {isArabic ? "استكشف المزيد" : "Explore More"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Etymology Analysis */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-400" />
                </div>
                <CardTitle className={`text-blue-900 ${isArabic ? "font-arabic text-xl" : "text-lg"}`}>
                  {currentContent.features.etymology.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`${isArabic ? "font-arabic text-base" : "text-sm"} text-gray-600`}>
                  {currentContent.features.etymology.description}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Frequency Insights */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className={`text-blue-900 ${isArabic ? "font-arabic text-xl" : "text-lg"}`}>
                  {currentContent.features.frequency.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`${isArabic ? "font-arabic text-base" : "text-sm"} text-gray-600`}>
                  {currentContent.features.frequency.description}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Video Learning */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <CardTitle className={`text-blue-900 ${isArabic ? "font-arabic text-xl" : "text-lg"}`}>
                  {currentContent.features.video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`${isArabic ? "font-arabic text-base" : "text-sm"} text-gray-600`}>
                  {currentContent.features.video.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Words Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h3
            className={`mb-12 text-center text-blue-900 ${isArabic ? "text-3xl md:text-4xl font-arabic font-bold" : "text-2xl md:text-3xl font-bold"}`}
          >
            {currentContent.latestWords}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {isLoading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => <WordCardSkeleton key={index} />)
              : latestWords.map((word, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100 group cursor-pointer bg-white/80 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle
                          className={`text-blue-900 group-hover:text-blue-700 transition-colors ${isArabic ? "font-arabic text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                        >
                          {word.word}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="text-amber-600 border-amber-400 arabic-numbers bg-amber-50 group-hover:bg-amber-100 transition-colors text-xs md:text-sm"
                        >
                          {word.frequency}
                        </Badge>
                      </div>
                      <CardDescription
                        className={`${isArabic ? "font-arabic text-sm md:text-base" : "text-sm"} text-gray-600 group-hover:text-gray-700 transition-colors`}
                      >
                        {word.meaning}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                        <span
                          className={`${isArabic ? "font-arabic" : ""} group-hover:text-gray-600 transition-colors`}
                        >
                          {isArabic ? "الجذر:" : "Root:"} {word.root}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 text-xs md:text-sm px-2 md:px-3"
                        >
                          {isArabic ? "اقرأ المزيد" : "Read More"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 px-6 py-2"
            >
              {isArabic ? "عرض المزيد من الكلمات" : "Load More Words"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className={`font-semibold mb-2 ${isArabic ? "font-arabic text-lg" : ""}`}>
                {currentContent.footer.academic}
              </h4>
              <p className={`text-blue-200 ${isArabic ? "font-arabic" : "text-sm"}`}>
                {isArabic ? "معتمد من الجامعات الإسلامية المرموقة" : "Endorsed by prestigious Islamic universities"}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className={`font-semibold mb-2 ${isArabic ? "font-arabic text-lg" : ""}`}>
                {currentContent.footer.scholars}
              </h4>
              <p className={`text-blue-200 ${isArabic ? "font-arabic" : "text-sm"}`}>
                {isArabic
                  ? "فريق من علماء اللغة العربية والدراسات القرآنية"
                  : "Team of Arabic language and Quranic studies scholars"}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className={`font-semibold mb-2 ${isArabic ? "font-arabic text-lg" : ""}`}>
                {currentContent.footer.verified}
              </h4>
              <p className={`text-blue-200 ${isArabic ? "font-arabic" : "text-sm"}`}>
                {isArabic ? "محتوى مراجع ومدقق من قبل المختصين" : "Content reviewed and verified by specialists"}
              </p>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className={`text-blue-200 ${isArabic ? "font-arabic" : "text-sm"}`}>
              {isArabic
                ? `© ${new Date().getFullYear()} مستكشف علم الاشتقاق القرآني. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Quranic Etymology Explorer. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
