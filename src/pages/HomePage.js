import React from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'
import Header from '../layout/Header'
import SliderSwiper from '../components/SliderSwiper'
import logo2 from "../assets/logo-2.png"
import imgSection from "../assets/img-section.png"
import imgSection2 from "../assets/img-section2.jpg"
import imgSection3 from "../assets/img-section3.jpg"
import imgSection4 from "../assets/img-section4.png"
import thumb1 from "../assets/thumb-1.jpg"
import thumb2 from "../assets/thumb-2.jpg"
import thumb3 from "../assets/thumb-3.jpg"
import thumb4 from "../assets/thumb-4.jpg"
import Footer from '../layout/Footer'



const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />

      {/* SECTION */}
      <div className='p-20 flex flex-col text-while bg-gray'>
        <h3 className='text-5xl mb-2'>FREE DOWNLOAD</h3>
        <span className='text-4xl mb-2'>THE 10 BENEFITS OF MANAGED IT SERVICES</span>
        <button className='bg-main-100 rounded-lg p-2 text-2xl w-2/12'>DOWNLOAD</button>
      </div>

      {/* SECTION */}
      <div className='p-5 bg-main-100 flex flex-col justify-center items-center'>
        <h3 className='text-xl p-2'>WHO IS GLOBAL TECH SOLUTIONS</h3>
        <div>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/Pp26tEK-6vQ" title="Who is Global Tech Solutions" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      {/* SECTION */}
      <div className='bg-bg-img h-[500px]  flex flex-col justify-center items-center'>
        <div className='text-while pt-14 pb-28'>
          <div className='text-5xl m-6'>Global Tech Solutions Is Here To Help Support Your Business!</div>
          <div className='text-base'>Our Goal Is To Prevent IT Issues Before They Even Happen, Keeping Your Business Profitable and Successful.</div>
        </div>
      </div>

      {/* SECTION */}
      <div className='flex gap-4 flex-wrap justify-center items-center'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>

      {/* SECTION */}
      <div className='flex justify-between p-10 bg-bg-img2 '>
        <div className='w-1/2'><iframe width="431" height="243" src="https://www.youtube.com/embed/HrSKk-ZfJCk" title="Learn Our ConnectWise Customer Portal!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        <div className='w-1/2 text-while'>
          <div className='text-4xl mb-4 font-bold'>Get to Know Our Support Portal</div>
          <div className='text-lg mb-8'>This Valuable Tool Only Gets Better When You Understand More Of Its Features.</div>
          <div className='text-sm mb-4'>The support portal serves as a direct line of communication between you and our support team, also providing access to a complete record of your technology components, support history, and more. Take a moment to watch this video to learn about how you can use the support portal to its full extent.</div>
          <button className='bg-main-100 rounded-md p-2 '>GET SUPPORT</button>
        </div>
      </div>

      {/* SECTION */}
      <div className='p-12 '>
        <h2 className='text-3xl font-bold'>Not Just IT; Your #1 Technology Experts</h2>
        <h3 className='text-main text-2xl'>Global Tech Solutions Helps Businesses Get The Most Out Of Their Technology.</h3>
        <div className='flex  justify-between p-10'>
          <img className='m-5' src={logo2} alt="" />
          <div className=''>
            <h2 className='text-3xl font-bold mb-2 '>Global Link Communications</h2>
            <h4 className='text-xl text-main font-bold'>We’re Your Singular Contact For All Of Your Communication Needs</h4>
            <p className='text-lg pt-2'>We are able to audit your Internet, TV, and Phone service bill and eliminate anything that is unnecessary for your business. Our goal is to help you get the most economical option for the services you need. You’ll get recommendations based on the quality of service and, of course, saving money. We also act a singular point of contact for clarifications on billing.</p>
          </div>
        </div>

        <div className='flex  justify-between p-10'>
          <div className='text-right'>
            <h2 className='text-3xl font-bold mb-2 '>Global Secure Technologies</h2>
            <h4 className='text-xl text-main font-bold'>We Connect Everything In Your Business Together</h4>
            <p className='text-lg pt-2'>Every computer on your network, every connected device, and every physical security solution relies on low voltage cabling to operate properly. With so many mission-critical components, it is important that the underlying infrastructure is capable of supporting them.</p>
          </div>
          <img className='m-5' src={logo2} alt="" />
        </div>
      </div>

      <div className='flex justify-between p-20 bg-gray text-while'>
        <div className='mr-20 w-1/2'>
          <h2 className='text-3xl mb-4 font-bold'>LEARN HOW GLOBAL TECH HELPED THIS HEALTHCARE PROVIDER BECOME 90% MORE EFFICIENT AND SECURE IN A PANDEMIC</h2>
          <p className='text-lgpy-2'>When your business completely relies on technology to communicate and collaborate, and requires constant access to company data and records, you need a technology partner that can deliver.</p>
          <button className='text-sm bg-main-100 p-4 rounded-lg mt-2'>DOWNLOAD NOW</button>
        </div>
        <div className='w-1/2'><img src={imgSection} alt="" /></div>
      </div>

      {/* SECTION */}
      <div className='p-10'>
        <div>We Partner With:</div>
        <div>
          <SliderSwiper />
        </div>
        <div className='text-3xl text-main font-bold'>Global Tech Solutions</div>
        <div className='text-5xl font-bold text-gray'>Can Solve Your IT Issues</div>
        <div className='flex flex-row justify-between pb-10'>
          <img className='w-[45%] py-4' src={imgSection2} alt="" />
          <div className='w-1/2'>
            <h3 className='mb-8 font-bold text-3xl'>START A FREE CONSULTATION</h3>
            <div className='mb-8 text-main font-bold text-xl'>Let’s Get Together And Talk About Your Technology</div>
            <div className='text-base'>As a business owner, managing your IT isn’t your day job. Whether you have questions about how to streamline, expand, or protect your network, or you are just looking for a second option, one of our experienced account managers would be happy to discuss your IT with you.</div>
            <button className='text-sm bg-main-100 p-4 rounded-lg mt-8 text-while'>GET STARTED</button>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <img className='w-[45%]  py-4' src={imgSection3} alt="" />
          <div className='w-1/2'>
            <h3 className='mb-8 font-bold text-3xl'>GET A FREE NETWORK AUDIT</h3>
            <div className='mb-8 text-main font-bold text-xl'>Tired Of Annoying Computer Problems That Keep Coming Back?</div>
            <div className='text-base'>If you are spending time dealing with slow, unresponsive technology, unempathetic tech support, and repeat issues, it’s cutting into your productivity and profitability. Whether you have an immediate need or just want a second option, our deep-dive network audit will reveal hidden problems, security vulnerabilities, and other issues lurking on your network.</div>
            <button className='text-sm bg-main-100 p-4 rounded-lg mt-8 text-while'>SIGN UP</button>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <div>
        <div className='flex mb-10 p-10 '>
          <div className='w-2/3 flex flex-col'>
            <span className='text-3xl font-semibold text-main'>Testimonials</span>
            <span className='text-4xl font-bold text-gray'>What Our Customers Say</span>
          </div>
          <div className='w-1/3 '><button className='py-4 bg-gray px-24 rounded-xl text-while'>READ MORE</button></div>
        </div>

        <div className='w-full text-while p-10 flex flex-wrap gap-[1px] '>
          <div className='flex w-[49%] p-16  bg-main-100'>
            <div className='w-1/4 m-4 '>
              <img className='rounded-3xl' src={thumb1} alt="" />
            </div>
            <div className='w-3/4'>
              <div> Global Tech has been a great IT partner for our nursing home, helping to alleviate the stress of day-to-day technical issues.</div>
              <p className='font-bold mt-2'>Bronx Park Rehabilitation & Nursing Center</p>
            </div>
          </div>

          <div className='flex w-[49%] p-16  bg-main-100'>
            <div className='w-1/4 m-4 '>
              <img className='rounded-3xl' src={thumb2} alt="" />
            </div>
            <div className='w-3/4'>
              <div> Dealing with our technical issues had been super overwhelming before we discovered Abraham Brown and Global Tech Solutions.</div>
              <p className='font-bold mt-2'>Essential Health</p>
            </div>
          </div>

          <div className='flex w-[49%] p-16  bg-main-100'>
            <div className='w-1/4 m-4 '>
              <img className='rounded-3xl' src={thumb3} alt="" />
            </div>
            <div className='w-3/4'>
              <div> Every user was set up with a remote gateway connection, remote desktop… it was almost seamless, which is pretty unbelievable to have that many users be set up to get into their PCs in the office.</div>
              <p className='font-bold mt-2'>RenAlliance Group</p>
            </div>
          </div>

          <div className='flex w-[49%] p-16  bg-main-100'>
            <div className='w-1/4 m-4 '>
              <img className='rounded-3xl' src={thumb4} alt="" />
            </div>
            <div className='w-3/4'>
              <div> Global Tech has been a great IT partner for our nursing home, helping to alleviate the stress of day-to-day technical issues.</div>
              <p className='font-bold mt-2'>Bronx Park Rehabilitation & Nursing Center</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <div className='flex text-while bg-main-100 p-10'>
        <div className='flex flex-col'>
          <strong className='text-2xl'>Signup For Our Newsletter</strong>
          <p className='text-sm'>Signup with your email address to receive news and updates</p>
        </div>
        <div className='p-4 flex gap-2' >
          <input type="text" placeholder='Name' className='h-12 ' />
          <input type="email" placeholder='Email Address' className='h-12 ' />
        </div>
        <button className='bg-black px-4 m-4 font-bold rounded-xl'>SUBSCRIBE</button>
      </div>

      {/* SECTION */}
      <div className='flex'>
        <img src={imgSection4} alt="" />
        <div className='flex flex-col bg-gray text-while py-12 p-20'>
          <div className='text-4xl font-semibold mb-4'>The Global Tech Solutions Blog</div>
          <div className='text-base mb-8'>Global Tech Solutions has been in operation since 2015, providing IT Support such as technical helpdesk support, computer support, and consulting to businesses.</div>
          <div className='text-base mb-4'>In our blog, you can keep up to date with the latest information from the IT world including best practices, security information, and how-to guides. In addition to IT related content we also post Tips of the Week, off-topic and just for fun blogs, not to mention emergency and security alerts to keep you and your business safe.</div>
          <button className='bg-main-100 p-4 w-1/4 rounded-lg'>VIEW THE BLOG</button>
        </div>
      </div>

      {/* SECTION */}
      <div className='bg-gray text-while flex  p-10'>
        <div className='w-1/3 p-4'>
          <div className='flex flex-col w-11/12'>
            <h3 className='text-3xl font-bold mb-5'>Customer Login</h3>
            <label>Your Email</label>
            <input type="email" className='p-2' />
            <label className='pt-2'>Password</label>
            <input type="text" className='p-2' />
            <div>Remember me <input type="checkbox" /></div>
            <div className='flex '>
              <button className='text- bg-main-100 p-4 rounded-lg mt-4 w-1/3'>LOGIN</button>
              <div className='flex flex-col w-2/3 p-2 pl-4'>
                <a href="">Forgot your password?</a>
                <a href="">Create an Account ?</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-1/3 p-4'>
          <h3 className='text-3xl font-bold mb-5'>Latest Blog</h3>
          <p className='text-base font-bold mb-2'>Discussing the Global Identity System Used in the Metaverse</p>
          <p className=' mb-2'>Identity can be a complex thing to discuss, but in terms of security, it’s fairly straightforward. You either are who you say you are, or you’re not. With the metaverse taking off, individuals will need to be careful about how they are auth...</p>
          <button className='text- bg-main-100 p-4 rounded-lg mt-4 w-1/2  '>READ MORE</button>
        </div>
        <div className='flex flex-col w-1/3 p-4'>
          <h3 className='mb-5 font-bold text-3xl'>Contact Us</h3>
          <p className='mb-2'>National Managed Service Provider</p>
          <p className='mb-2'>Toll Free: (800) 484-0195</p>
          <p>Email:<span className='hover:underline hover:cursor-pointer'> info@globalts.com</span></p>
          <button className='text- bg-main-100 p-4 rounded-lg mt-4 w-2/3  '>DOWNLOAD OUR PLAYBOOK</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage