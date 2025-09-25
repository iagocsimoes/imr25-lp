/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/lib/utils'
import { Marquee } from '@/components/magicui/marquee'

const reviews = [
  {
    name: 'Eder Silva',
    username: '@eder_tech',
    body: 'A Codarte transformou nossa presença digital. Nossa conversão aumentou 300% em apenas 2 meses!',
    img: '/professional-business-person-smiling.png',
  },
  {
    name: 'Wander Costa',
    username: '@wander_marketing',
    body: 'Design impecável e resultados extraordinários. A melhor decisão que tomamos para nosso negócio.',
    img: '/smiling-businessman.png',
  },
  {
    name: 'Carlos Santos',
    username: '@carlos_ceo',
    body: 'Profissionalismo e qualidade excepcionais. Nossa landing page é simplesmente perfeita!',
    img: '/professional-business-person-smiling.png',
  },
  {
    name: 'Iago Oliveira',
    username: '@iago_dev',
    body: 'Superaram todas as nossas expectativas. O ROI foi incrível desde o primeiro dia.',
    img: '/smiling-businessman.png',
  },
  {
    name: 'João Martins',
    username: '@joao_business',
    body: 'Trabalho de altíssima qualidade. Nossa taxa de conversão triplicou! Recomendo muito.',
    img: '/professional-business-person-smiling.png',
  },
]

const firstRow = reviews.slice(0, 2)
const secondRow = reviews.slice(2, 4)
const thirdRow = reviews.slice(4, 5)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-fit sm:w-80 cursor-pointer overflow-hidden rounded-xl border p-8',
        'border-gray-600/30 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-800/70',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-base font-medium text-gray-300">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-lg text-gray-100 leading-relaxed font-medium">
        {body}
      </blockquote>
    </figure>
  )
}

const ReviewCardNormal = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6',
        'border-gray-600/30 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-800/70',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-base font-medium text-gray-300">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-lg text-gray-100 leading-relaxed font-medium">
        {body}
      </blockquote>
    </figure>
  )
}

const TestimonialsMarquee = () => {
  const normalFirstRow = reviews.slice(0, 3)
  const normalSecondRow = reviews.slice(2, 5)

  return (
    <div className="py-20 max-sm:py-12">
      {/* Header */}
      <div className="text-center mb-12 max-sm:mb-8 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl max-sm:text-3xl font-medium text-white mb-4 mt-16 max-sm:mt-8">
          O que nossos clientes dizem
        </h2>
        <p className="text-gray-400 text-lg max-sm:text-base max-w-2xl mx-auto">
          Mais de 300 projetos entregues com excelência e resultados comprovados
        </p>
      </div>

      {/* 3D Marquee - Mobile Only */}
      <div className="md:hidden relative flex h-[600px] w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-8"
          style={{
            transform:
              'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:25s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-slate-950"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950"></div>
      </div>

      {/* Normal Marquee - Desktop Only */}
      <div className="hidden md:flex relative w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {normalFirstRow.map((review) => (
            <ReviewCardNormal key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {normalSecondRow.map((review) => (
            <ReviewCardNormal key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-950"></div>
      </div>
    </div>
  )
}

export default TestimonialsMarquee
