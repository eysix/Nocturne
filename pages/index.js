import Head from 'next/head';
import {BsFillMoonFill} from 'react-icons/bs';
import {BsPinterest, BsInstagram, BsYoutube } from 'react-icons/bs';
import Image from "next/image";
import nocturne from '../public/Chocolate.png';
import wrapper1 from '../public/bar.png';
import wrapper2 from '../public/backup.png';
import mockup from '../public/mockup.png';
import tree from '../public/tree.png';
import earth from '../public/earth.png';
import script from '../public/old.png';
import piece from '../public/milk.jpg';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nocturne</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 px-10 md:px-20 lg:px-50 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-5xl font-semibold font-pinyon dark:text-gray-300">Nocturne</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonFill 
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:fill-gray-200"/>
              </li>
              <li>
                <a className=" bg-gradient-to-r from-blue-900 to-violet-900 text-white px-4 py-2 rounded-md ml-8" 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Pre-order</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-6xl py-4 text-blue-900 font-semibold font-garamond dark:text-blue-300">Nocturne Chocolate</h2>
            <h3 className="text-3xl py-2 font-garamond dark:text-gray-200">Pure organic delicacies.</h3>
            <p className="text-lg pt-8 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Mystery and dreaminess, luxury and sophistication, elegance and romance, 
              intricately created to exceed your expectations. </p>
          </div>
          <div className="relative mx-auto my-auto w-50 h-50 flex items-center justify-center py-20 hover:animate-spin-slow">
            <Image src={nocturne}/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 px-10 font-semibold font-garamond dark:text-gray-200">
              A Treasured Delicacy
            </h3>
            <p className="text-md py-2 px-10 leading-8 text-gray-800 dark:text-gray-200">
            The classic milk chocolate bar by Nocturne is a treasured delicacy. Whether it’s for a
            dessert recipe, a gift to a loved one, or your sweet tooth, this sweet confection is an
            excellent choice that will absolutely exceed <span className="text-blue-800 font-semibold">your standards.</span>
            </p>
            <br></br>
            <h3 className="text-3xl py-1 px-10 font-semibold font-garamond dark:text-gray-200" >
              About Us
            </h3>
            <p className="text-md py-2 px-10 leading-8 text-gray-800 dark:text-gray-200">
            Our chocolate is inspired by the word “nocturne”, which describes works of art
            dealing with the night and dreamy, pensive piano compositions. The ideal setting to consume Nocturne chocolate is a night
            setting where you are alone or with a romantic partner. Perhaps you
            will be enjoying Chopin’s <span className="text-blue-800 italic">Nocturne in E flat major Opus 9 No. 2</span>, 
            appreciating one of Whistler’s tranquil nocturne paintings, or simply admiring the moonlight glimmer over
            calm waters.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-l my-10 hover:opacity-70">
              <Image src={tree} width={150} height={100} class="mx-auto"/>
              <h3 className="text-2xl font-semibold pt-8 pb-2 font-garamond dark:text-gray-200">Environmentally sustainable</h3>
              <p className="py-2 dark:text-gray-200">
              We produce organic chocolate that is <span className="text-blue-800 font-semibold">ethically sourced and
              manufactured.</span>
              </p>
              <p className="py-2 dark:text-gray-200">Through innovative farming methods, an effective platform that listens
              to customer and employee feedback, and widespread transparency on company
              policies and practices, Nocturne aims to truly exceed expectations.
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-l my-10 hover:opacity-70">
              <Image src={earth} width={150} height={100} class="mx-auto"/>
              <h3 className="text-2xl font-semibold pt-8 pb-2 font-garamond dark:text-gray-200">Equitable</h3>
              <p className="py-2 dark:text-gray-200">
              Nocturne is an ethical brand that meets the economic, social, and
              environmental criteria defined by the Fairtrade standards.
              </p>
              <p className="py-2 dark:text-gray-200">We believe in equitable trading partnerships based on <span className="text-blue-800 font-semibold">
                dialogue, transparency, and
              respect.</span> We are committed to raising awareness and promotiing fair trade across our brand and investing in
              the communities that help us produce our outstanding chocolate.
              </p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-l my-10 hover:opacity-70">
              <Image src={script} width={150} height={100} class="mx-auto"/>
              <h3 className="text-2xl font-semibold pt-8 pb-2 font-garamond dark:text-gray-200">Traditional</h3>
              <p className="py-2 dark:text-gray-200">
              Take a step back in time with classic Nocturne chocolate, filled with elegance and sophistication.
              </p>
              <p className="py-2 dark:text-gray-200">
                We take pride in the chocolate we have so passionately created with the finest, traditional techniques, 
                matched by equally high ethical and sustainability standards. 
                That way, you are able to wholeheartedly indulge your senses, every single time.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
          <h3 className="text-3xl py-1 px-10 font-semibold font-garamond dark:text-gray-200">Our Chocolate</h3>
          <p className="text-md py-2 px-10 leading-8 text-gray-800 dark:text-gray-200">
            All of our chocolates and confections are handmade using the highest quality ingredients, and combine unique flavour options to create
            one-of-a-kind products unlike any other.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={mockup} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={wrapper1}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={wrapper2}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={piece}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="text-4xl flex justify-center gap-16 py-2 text-gray-500 hover:animate-pulse">
            <BsPinterest/>
            <BsInstagram/>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
              <BsYoutube/>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
