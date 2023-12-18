export const AboutMeBoard = () => (
  <section id='about-me' className='flex items-center justify-center h-full py-[130px] relative'>
    <div className='w-10 h-8 absolute max-[350px]:hidden top-[12%] lg:top-[10%] left-[2%] md:left-[6%] lg:left-[10%] xl:left-[14%] border-t-2 border-l-2 border-slate-800'></div>
    <div className='w-10 h-8 absolute max-[350px]:hidden bottom-[12%] lg:bottom-[10%] right-[2%] md:right-[6%] lg:right-[10%] xl:right-[14%] border-b-2 border-r-2 border-slate-800'></div>
    <div className='max-w-[65ch] py-2 px-4 relative space-y-4'>
      <h2 className='border-b pb-2 text-gray-800 font-bold capitalize leading-normal max-md:text-md max-lg:text-lg lg:text-2xl'>
        About Me
      </h2>
      <p className='h-full text-left text-base leading-relaxed text-gray-500 space-y-3 lg:space-y-4'>
        <span className='block'>
          As a person who is deeply passionate about science and technology. Every day, I strive to
          expand my knowledge and take on new challenges in the IT sector.
        </span>

        <span className='block'>
          With approximately two years of hands-on experience in IT, my passion for being part of
          the IT industry began when I was captivated by technology&apos;s ability to transform the
          world for the better through innovative products and services.
        </span>

        <span className='block'>
          Over the years, I have spent my time honing my skills as a self-taught software developer,
          adapting to the dynamic circumstances of the industry. Next year I will expand my
          knowledge by starting a Bachelor&apos;s degree in Computer Science at the University of Buenos
          Aires.
        </span>

        <span className='block'>
          I love to network with like-minded, curious and passionate professionals who share my
          appetite to learn and grow. I strongly believe in the power of mutual learning and
          collaborative environments that foster personal and professional development.
        </span>
      </p>
    </div>
  </section>
)
