'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  clientName: string
  company: string | null
  clientImage: string | null
  rating: number
  testimonial: string
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials')
      if (res.ok) {
        const data = await res.json()
        setTestimonials(data)
      }
    } catch (error) {
      console.error('Erro ao carregar testemunhos:', error)
    } finally {
      setLoading(false)
    }
  }

  // Testemunhos padrão se não houver no banco
  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      clientName: 'Maria Silva',
      company: 'Projeto Residencial',
      clientImage: null,
      rating: 5,
      testimonial: 'Excelente trabalho! O portão ficou perfeito e a instalação foi rápida. Recomendo!'
    },
    {
      id: '2',
      clientName: 'João Santos',
      company: 'Comercial',
      clientImage: null,
      rating: 5,
      testimonial: 'Muito satisfeito com o serviço. Equipe profissional e material de qualidade.'
    },
    {
      id: '3',
      clientName: 'Ana Costa',
      company: 'Residencial',
      clientImage: null,
      rating: 5,
      testimonial: 'Ótimo atendimento desde o primeiro contato. Trabalho impecável!'
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayTestimonials.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch handlers para arrastar
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextTestimonial()
    }
    if (isRightSwipe) {
      prevTestimonial()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Mouse drag
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setDragEnd(e.clientX)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const distance = dragStart - dragEnd
    const isLeftDrag = distance > 50
    const isRightDrag = distance < -50

    if (isLeftDrag) {
      nextTestimonial()
    }
    if (isRightDrag) {
      prevTestimonial()
    }

    setDragStart(0)
    setDragEnd(0)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Indicador de arrasto */}


      <div 
        className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                <Quote className="h-12 w-12 text-red-600 opacity-20 mb-4 mx-auto" />
                
                {/* Foto do Cliente */}
                <div className="flex justify-center mb-6">
                  {testimonial.clientImage ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                      <img
                        src={testimonial.clientImage}
                        alt={testimonial.clientName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-red-600 shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {testimonial.clientName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Estrelas */}
                {renderStars(testimonial.rating)}
                
                {/* Testemunho */}
                <p className="text-gray-600 text-lg mb-6 italic text-center leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                {/* Nome do Cliente */}
                <div className="text-center">
                  <p className="text-gray-900 font-bold text-xl">
                    {testimonial.clientName}
                  </p>
                  {testimonial.company && (
                    <p className="text-gray-500 text-sm mt-1">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setas de Navegação */}
      {displayTestimonials.length > 1 && (
        <>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-xl transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-xl transition-all hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {displayTestimonials.length > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-red-600' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para testemunho ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
