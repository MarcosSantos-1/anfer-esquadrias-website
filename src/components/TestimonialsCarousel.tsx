'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Users } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Excelente trabalho! A equipe da ANFER foi muito profissional e o resultado superou nossas expectativas. Recomendo!",
    author: "João Silva",
    role: "Projeto Residencial",
    rating: 5
  },
  {
    id: 2,
    text: "Instalaram um portão automático em nossa empresa. Qualidade impecável e entrega no prazo. Muito satisfeitos!",
    author: "Maria Santos",
    role: "Comercial",
    rating: 5
  },
  {
    id: 3,
    text: "Precisávamos de guarda-corpos para nosso condomínio. O trabalho ficou perfeito, com ótimo acabamento. Parabéns!",
    author: "Carlos Oliveira",
    role: "Condomínio",
    rating: 5
  },
  {
    id: 4,
    text: "Contratei a ANFER para fazer grades de proteção. Além da qualidade, o atendimento foi excepcional!",
    author: "Ana Paula",
    role: "Residencial",
    rating: 5
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`}
            className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-500"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, j) => (
                <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-colors z-10"
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-colors z-10"
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
