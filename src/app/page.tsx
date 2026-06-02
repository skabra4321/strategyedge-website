import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Capabilities } from '@/components/home/Capabilities'
import { Industries } from '@/components/home/Industries'
import { WhyUs } from '@/components/home/WhyUs'
import { TheModel } from '@/components/home/TheModel'
import { Metrics } from '@/components/home/Metrics'
import { LeadershipPreview } from '@/components/home/LeadershipPreview'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'StrategyEdge Advisory | GCC Strategy & Transformation',
  description:
    'Premier boutique strategy and transformation advisory, exclusively serving GCC governments, sovereign-linked organisations, and leading enterprises. Founded by ex-BCG principals.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Industries />
      <WhyUs />
      <TheModel />
      <Metrics />
      <LeadershipPreview />
      <InsightsPreview />
      <ContactCTA />
    </>
  )
}
