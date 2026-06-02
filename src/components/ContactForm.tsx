'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    title: '',
    organisation: '',
    email: '',
    topic: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission -- wire up to your email/CRM endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <CheckCircle size={32} className="text-[#9EB3C8]" />
        <h3 className="font-inter font-semibold text-[#0A1628] text-lg">Enquiry received.</h3>
        <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed max-w-md">
          Thank you for reaching out. A principal will review your enquiry and respond directly -- typically within one business day.
        </p>
      </div>
    )
  }

  const inputClass = 'w-full font-inter text-sm text-[#0A1628] bg-transparent border-b border-[#C5D5E8] focus:border-[#9EB3C8] outline-none py-3 transition-colors duration-200 placeholder:text-[#4A6A8A]/50'
  const labelClass = 'font-inter text-xs text-[#4A6A8A] uppercase tracking-widest'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Chief Financial Officer"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className={labelClass}>Organisation *</label>
          <input
            type="text"
            name="organisation"
            required
            value={form.organisation}
            onChange={handleChange}
            placeholder="Your organisation"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@organisation.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>Area of Interest</label>
        <select
          name="topic"
          value={form.topic}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select a topic</option>
          <option value="strategy">Strategy & Transformation</option>
          <option value="procurement">Procurement & Supply Chain</option>
          <option value="finance">Finance Transformation</option>
          <option value="operations">Operations Excellence</option>
          <option value="esg">ESG & Sustainability</option>
          <option value="pmo">PMO & Execution</option>
          <option value="secondment">Expert Secondments</option>
          <option value="other">Other / General Enquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>Your Mandate</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Briefly describe what you are working on or what you need."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light disabled:opacity-60 transition-colors duration-300"
        >
          {status === 'submitting' ? 'Sending...' : (
            <>Send Enquiry <ArrowRight size={14} /></>
          )}
        </button>
        <p className="mt-4 font-inter text-xs text-[#4A6A8A]">
          We will never share your details. By submitting you agree to our Privacy Policy.
        </p>
      </div>
    </form>
  )
}
