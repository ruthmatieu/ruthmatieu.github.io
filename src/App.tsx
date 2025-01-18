import React from 'react';
// import headshot from './assets/alanna-headshot.png';
import './App.css';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import headshottwo from './assets/headshot-2.png';
import { experience, projects, posts } from './Data/data';

function App() {
  const blue = '#0EA5E9';
  const pink = '#DB2777';
  const orange = '#FB923C';
  const green = '#14B8A6';
  const tan = '#998F8F';

  return (
    <div className="">
      <section className="flex justify-center items-enter bg-white rounded-lg">
        {/* // do the background orbs from luxebyte here as well */}
        <div className="relative grid place-items-center md:pt-10 pb-10 md:pb-20">
          <img
            src={headshottwo}
            alt="Alanna Matieu headshot"
            className="rounded-full w-[250px] sm:w-[350px] z-10 mt-20 md:mt-0"
          />
          <h1
            className="absolute font-bold uppercase z-0 drop-shadow-md"
            style={{
              fontSize: 'clamp(2rem, 5vw, 9rem)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: pink,
            }}
          >
            ALANNA
            <span className="ml-[5rem]" style={{ color: '#3B393A' }}>
              MATIEU
            </span>
          </h1>
          
          <h2 className="text-gray-800 mt-10 text-center texy-lg md:text-xl font-semibold max-w-[450px] mx-4">
            <span style={{ color: green }} className="font-bold">
              Frontend Engineer
            </span>{' '}
            building intuitive, high-performance
            web experiences with passion and precision.
          </h2>
          <ul className='flex space-x-8 mt-6'>
            <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noreferrer"><FaLinkedin className="social-hover" size={22}/></a></li>
            <li><a href="https://github.com/ruthmatieu" target="_blank" rel="noreferrer"><FaGithub className="social-hover" size={22}/></a></li>
            <li><a href="https://twitter.com/ruthmatieu" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="social-hover" size={22}/></a></li>
            <li><a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="social-hover" size={22}/></a></li>
        </ul>
        </div>
      </section>
      <section className="flex justify-center items-enter text-center mt-10 md:mt-20">
        <div className="mb-10">
          {/* abut me section  */}
          <h3 className="mb-4 text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            software
            <br />
            <span className="text-gray-600" style={{ color: '#3B393A' }}>
              engineer
            </span>
          </h3>
          <p className="max-w-[800px]" style={{ color: tan }}>
            I have over 5 years of experience building dynamic, user-friendly
            web applications. I specialize in React, TypeScript, and Tailwind
            CSS, with a focus on accessibility and performance. I’m passionate
            about solving complex challenges, mentoring teams, and continuously
            learning. Let’s connect and create something amazing!
          </p>
        </div>
      </section>
      {/* STATISTICS */}
      <section className="flex justify-center items-center gap-8 md:gap-14 text-center uppercase">
        <div className="font-bold" style={{ color: tan }}>
          <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: pink }}>
            5+
          </span>
          <br />
          years of
          <br />
          experience
        </div>
        <div className="font-bold" style={{ color: tan }}>
          <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: pink }}>
            50+
          </span>
          <br />
          projects
          <br />
          delivered
        </div>
        <div className="font-bold" style={{ color: tan }}>
          <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: pink }}>
            1K+
          </span>
          <br />
          lines of
          <br />
          code written
        </div>
      </section>
      {/* EXPERIENCE */}
      <section className="flex justify-center items-enter text-center mt-10 md:mt-20 max-w-[800px] mx-auto">
        <div className="">
          <h3 className="mb-4 text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            experience
          </h3>
          <div id="experience" className="">
            {experience.map((item) => (
              <div className="group" key={item.id}>
                <a
                  href={item.companyWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="group-hover:bg-blue-300 block rounded-lg group-transition-colors group-duration-300 group-hover:bg-opacity-5"
                >
                  <div className="p-8" style={{ color: '#888D91' }}>
                    <div className="flex items-center">
                      <p
                        className="text-xl font-bold mb-1 group-hover:underline"
                        style={{ color: green }}
                      >
                        {item.role} -{' '}
                        <span style={{ color: green }}>{item.company}</span>
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        className="mb-1 ml-1"
                      >
                        <path
                          d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"
                          fill={orange}
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm font-bold mb-2 text-left text-white">
                      {item.duration}
                    </p>
                    <p
                      className="mb-2 group-hover:text-gray-300 text-left"
                      style={{ color: tan }}
                    >
                      {item.description}
                    </p>
                    <div className="flex mb-2">
                      {item.additionalLinks?.map((link, index) => (
                        <span key={index} className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            className="mr-1"
                          >
                            <path
                              d="M13.0605 8.11073L14.4747 9.52494C17.2084 12.2586 17.2084 16.6908 14.4747 19.4244L14.1211 19.778C11.3875 22.5117 6.95531 22.5117 4.22164 19.778C1.48797 17.0443 1.48797 12.6122 4.22164 9.87849L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.0605 18.0102C15.0131 16.0576 15.0131 12.8918 13.0605 10.9392L11.6463 9.52494L13.0605 8.11073ZM19.778 14.1211L18.3638 12.7069C20.3164 10.7543 20.3164 7.58847 18.3638 5.63585C16.4112 3.68323 13.2453 3.68323 11.2927 5.63585L10.9392 5.98941C8.98653 7.94203 8.98653 11.1079 10.9392 13.0605L12.3534 14.4747L10.9392 15.8889L9.52494 14.4747C6.79127 11.741 6.79127 7.30886 9.52494 4.57519L9.87849 4.22164C12.6122 1.48797 17.0443 1.48797 19.778 4.22164C22.5117 6.95531 22.5117 11.3875 19.778 14.1211Z"
                              fill="#FFFFFF"
                            ></path>
                          </svg>
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            className="text-xs text-white mr-4 hover:text-blue-400"
                          >
                            {item.additionalLinksTitle[index]}
                          </a>
                        </span>
                      ))}
                    </div>
                    <p className="text-xs flex space-x-2 mb-2">
                      {item.techStack?.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-lg"
                          style={{
                            // backgroundColor: '#3D5684',
                            // color: '#98FBFC',
                            backgroundColor: pink,
                            color: '#000',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </p>
                    <p className="text-xs flex space-x-2">
                      {item.techStack?.slice(4, 9).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-lg"
                          style={{
                            backgroundColor: pink,
                            color: '#000',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="flex justify-center items-center text-center mt-10 md:mt-20 max-w-[800px] mx-auto">
        <div className="">
          <h3 className="mb-4 text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            case
            <br />
            <span className="text-gray-600" style={{ color: '#3B393A' }}>
              studies
            </span>
          </h3>
          <div className="md:grid grid-cols-2 gap-6">
            {projects.map((item) => (
              <div
                className="group flex py-8 md:p-8 rounded-lg transition-colors duration-300"
                key={item.id}
                style={{ color: '#888D91' }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="md:flex items-start md:flex-col"
                >
                  <div className="relative w-full h-auto">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt=""
                      className="rounded w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 opacity-80 rounded transition-opacity duration-300 group-hover:opacity-0" style={{backgroundColor: pink}}></div>
                  </div>
                  <div className="md:text-left">
                    <div className="flex items-center">
                      <p
                        className="group-hover:underline text-xl text-center md:text-left font-bold mt-3"
                        style={{ color: green }}
                      >
                        {item.title}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        className="ml-1 -mb-3"
                      >
                        <path
                          d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"
                          fill={orange}
                        ></path>
                      </svg>
                    </div>
                    <p className="group-hover:text-gray-300 text-left">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BLOG SECTION */}
      <section className="flex justify-center items-center text-center mt-10 md:mt-20 max-w-[800px] mx-auto">
        <div>
      <h3 className="mb-4 text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            blog
            <br />
            <span className="text-gray-600" style={{ color: '#3B393A' }}>
              posts
            </span>
          </h3>
          <div id="posts" style={{ color: "#98FBFC" }}>
            {posts.map(post => (
                <div key={post.id} className="group">
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group-hover:bg-blue-300 block rounded-lg group-transition-colors group-duration-300 group-hover:bg-opacity-5"
                    >
                        <div className="p-4 lg:p-8" style={{ color: "#888D91" }}>
                            <div className="flex items-center">
                                <p
                                  className="text-left text-xl font-bold mb-1 group-hover:underline"
                                  style={{ color: green }}>{post.title}</p>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    width="15" 
                                    height="15"
                                    className="mb-1 ml-1"
                                >
                                        <path 
                                            d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" 
                                            fill={orange}>
                                        </path>
                                </svg>
                            </div>
                            <p className="mt-2 text-left group-hover:text-gray-300">{post.description.slice(0,140)}...</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
        </div>
      </section>
      <section className="flex justify-center items-center text-center mt-10 md:mt-20 max-w-[800px] mx-auto">
      <h3 className="mb-4 text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            Tools
            <br />
            <span className="text-gray-600" style={{ color: '#3B393A' }}>
              used
            </span>
          </h3>
      </section>
      {/* skills blog testimonials open source/thought leadership contact footer
      Option 4 (winner): */}
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            backgroundColor: '#0EA5E9',
            padding: '20px',
            margin: '5px',
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: '#DB2777',
            padding: '20px',
            margin: '5px',
          }}
        >
          2
        </div>
        <div
          style={{
            backgroundColor: '#FB923C',
            padding: '20px',
            margin: '5px',
          }}
        >
          3
        </div>
        <div
          style={{
            backgroundColor: '#14B8A6',
            padding: '20px',
            margin: '5px',
          }}
        >
          4
        </div>
      </div> */}
    </div>
  );
}

export default App;
