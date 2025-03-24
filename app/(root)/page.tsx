import Interviewcards from '@/components/Interviewcards'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Page = () => {
  return (
    <>
    <section className='card-cta flex flex-row items-center justify-between gap-10 max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#0a0a0a] to-[#111] text-white max-md:flex-col'>
      
      <div className='max-w-lg text-left'>
        <h3 className='text-2xl font-bold'>Get Interview-Ready with AI-Powered Practice & Feedback</h3>
        <p className='text-lg mt-3'>
          Practice on real interview questions & get instant feedback
        </p>

        <Button asChild className='btn-primary mt-5 max-sm:w-full'>
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>

      <Image
        src="/robot.png"
        alt="Interview AI Robot"
        width={350}
        height={350}
        className="max-md:w-64"
      />
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
      {dummyInterviews.map((interview)=>(<
        Interviewcards{...interview} key ={interview.id}/>))}
      </div>

    </section>

    <section className='flex flex-col gap-6 mt-8'>
    <h2>Take an interview</h2>
    <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(<
        Interviewcards{...interview} key ={interview.id}/>))}
    </div>
    </section>

    </>
  )
}

export default Page
