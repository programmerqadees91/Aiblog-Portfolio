"use client"
import React,{useRef,useEffect} from "react";
import Typed from "typed.js";
import Image from "next/image";

export default function Home() {
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Thumbnail Designer', 'Software Engineering', 'Data Analysis', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
  <main>
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
        </p>
        {/* <div className="mt-6 bg-transparent border rounded-lg border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
            <input
              type="search"
              name="query"
              placeholder="Search Components"
              required
              className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div> */}
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          className="w-full h-full max-w-md mx-auto"
          width={500}
          height={500}
        />
      </div>
    </section>
 <section className="py-20 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">Our Pricing Plans</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Choose a plan that suits your needs.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
          </ul>
          <button className="w-full px-4 py-2 dark:bg-black text-white bg-primary rounded-lg transition-colors duration-300 hover:bg-primary/70">
            Choose Plan
          </button>
        </div>
      </div>
      {/* Standard Plan - Best Seller */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-purple-900 relative transition-transform transform hover:scale-105">
        <div className="absolute top-0 right-0 bg-primary text-white bg-purple-950 text-xs font-bold px-2 py-1 rounded-bl-lg">
          Best Seller
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">$20/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
          </ul>
          <button className="w-full px-4 py-2 dark:bg-black text-white bg-primary rounded-lg transition-colors duration-300 hover:bg-primary/70">
            Choose Plan
          </button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Feature 1</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 2</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 3</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 4</li>
            <li className="text-gray-600 dark:text-gray-400">Feature 5</li>
          </ul>
          <button className="w-full px-4 py-2 text-black dark:text-white dark:bg-black rounded-lg transition-colors duration-300 hover:bg-primary/70">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="container mx-auto px-4 py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
    <p className="mt-4 text-gray-600 dark:text-gray-400">Hear from our satisfied clients.</p>
  </div>
  <div className="flex flex-wrap justify-center items-stretch">
    {/* Review 1 */}
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          "The team provided exceptional service and the results exceeded our expectations. We are thrilled with the outcome!"
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          - <span className="font-bold">Alice</span>, Director at InnovateTech
        </p>
      </div>
    </div>
    {/* Review 2 */}
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          "Their attention to detail and customer service is unparalleled. We highly recommend their services."
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          - <span className="font-bold">Bob</span>, COO of MarketLeaders
        </p>
      </div>
    </div>
    {/* Review 3 */}
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          "A fantastic experience from start to finish. The team was professional and the results were outstanding."
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          - <span className="font-bold">Cathy</span>, Founder of GrowthHub
        </p>
      </div>
    </div>
  </div>
</section>

     <section className="py-20 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Explore our latest articles and insights.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/3.jpg" alt="Blog 1" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Business</h3>
            <p className="m-4 text-gray-600 dark:text-gray-400">A business blog provides insights, strategies, and tips related to entrepreneurship, management, marketing, and business growth. It covers topics like leadership, financial planning, industry trends, and customer relations, offering valuable advice for both aspiring and established business owners. The goal is to help readers navigate challenges, stay competitive, and drive success in their ventures.</p>
           
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/2.webp" alt="Blog 2" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Coding</h3>
            <p className="m-4 text-gray-600 dark:text-gray-400">A coding blog is an online platform where developers share knowledge, tutorials, tips, and experiences related to programming and software development. It typically covers various programming languages, frameworks, tools, and best practices, helping readers improve their coding skills and stay updated on industry trends.</p>
           
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 transition-transform transform hover:scale-105">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/1.webp" alt="Blog 3" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Thumbnail Designing</h3>
            <p className="m-4 text-gray-600 dark:text-gray-400">A thumbnail designing blog focuses on tips, techniques, and best practices for creating eye-catching thumbnails. It covers aspects like color theory, typography, composition, and design tools to help creators craft visuals that boost engagement, especially for platforms like YouTube and social media. The blog may also showcase design trends and tutorials to enhance viewers' first impressions.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
        <p className="mb-12 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block px-8 py-3 bg-primary text-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-primary/70 transition-colors duration-300"
        >
          Contact Me
        </a>
        <div className="mt-12">
          <p className="text-sm text-gray-400">© 2024 QadeesBinTasleem. All rights reserved.</p>
        </div>
      </div>
    </section>

  </main>
  );
}
