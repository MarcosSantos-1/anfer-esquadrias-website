'use client'

import { forwardRef } from 'react'

interface PhoneInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  required?: boolean
  className?: string
  placeholder?: string
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, name, required, className, placeholder }, ref) => {
    const formatPhoneNumber = (value: string) => {
      // Remove tudo que não é número
      const numbers = value.replace(/\D/g, '')
      
      // Aplica a máscara (99) 99999-9999
      if (numbers.length <= 2) {
        return numbers
      } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
      } else if (numbers.length <= 11) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
      } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhoneNumber(e.target.value)
      e.target.value = formatted
      onChange(e)
    }

    return (
      <input
        ref={ref}
        type="tel"
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        className={className}
        placeholder={placeholder}
        maxLength={15}
      />
    )
  }
)

PhoneInput.displayName = 'PhoneInput'

export default PhoneInput


