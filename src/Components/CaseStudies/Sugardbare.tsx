import React from 'react';
import image from "../../assets/sugardbare.png"

const Sugardbare = () => {
  return (
    <div>
      <section className="mt-10 md:mt-20 max-w-[800px] mx-auto">
        <h1 className="mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-7xl uppercase text-center font-extrabold">
            sugar'd
            <br />
            <span className="text-gray-600" style={{ color: '#3B393A' }}>
               bare
            </span>
        </h1>
        <div className="flex justify-center items-enter ">
          <div>
          
        <h1>Modernizing Small Business Websites: Sugar'd Bare Case Study</h1>
        <h2>Client Background: Briefly describe the small business, its industry, and its challenges or goals (e.g., "A local bakery looking to expand its online presence and enable online orders").</h2>

          <ul>
            <li>Role: Engineer, Designer</li>
            <li>Collaborated with designers to implement responsive UI</li>
            <li>Developed reusable components using React and TypeScript</li>
            <li>Integrated TailwindCSS for consistent design and rapid prototyping</li>
          </ul>
          </div>
          <img src={image} alt="" className='w-full'/>
          </div>
          
        
        
      </section>
<h3>Objective: State the project's purpose (e.g., improve user experience, increase online sales, or optimize mobile performance).</h3>
2. Your Role
Define your role in the project (e.g., "Frontend Engineer responsible for design implementation, responsive UI, and integrating backend APIs").
Mention if you worked solo or as part of a team and your specific contributions.

3. Technology Stack
Frontend: React, TypeScript, TailwindCSS.
Tools & Libraries: Mention any key tools (e.g., Vite, Jest, ESLint, or Prettier).
Backend/Integration: Briefly touch on backend technologies if applicable, especially if you interfaced with APIs.
4. Challenges and Solutions
a. Challenges
List specific problems you aimed to solve (e.g., "Creating a mobile-friendly interface for diverse customers" or "Implementing fast-loading pages for an image-heavy site").
b. Solutions
Explain how you solved these challenges using React, TypeScript, and TailwindCSS. Examples:
React: Modular and reusable components.
TypeScript: Type-safe code for scalability and reduced bugs.
TailwindCSS: Rapid prototyping and consistent design without custom CSS.
5. Design & Development
a. Design Process
Mention collaboration with designers (if any) or how you translated wireframes/designs into code.
Highlight TailwindCSS's role in achieving the final design.
b. Development Approach
Responsive design techniques and how TailwindCSS helped streamline layouts.
Key features implemented (e.g., an interactive menu, filtering, or animations).
API integration if applicable.
6. Key Features
User Interface: Highlight visual elements or interactions you built.
Performance Optimization: Discuss how you ensured fast load times and smooth navigation.
Accessibility: Steps you took to make the site accessible (e.g., WCAG compliance).
Testing: If applicable, describe unit tests, E2E tests, or performance checks.
7. Outcome
Metrics and Successes:
Improvement in performance (e.g., "Reduced page load times by 50%").
Business results (e.g., "Increased online inquiries by 30%").
User feedback (e.g., "Positive client and customer feedback on the site's usability").
Include visuals, such as before-and-after screenshots, performance graphs, or testimonials.
8. Lessons Learned
Share what you learned from the project, both technically (e.g., "Improved my skills in state management") and non-technically (e.g., "Enhanced communication with non-technical stakeholders").
9. Conclusion
Reflect on the overall project impact.
Mention how this experience solidified your skills and prepared you for similar challenges.
10. Supporting Media
Add screenshots of the final site and key features.
Include code snippets that highlight interesting challenges and solutions.
Optionally, embed links to the live site or a GitHub repository if publicly accessible.
    </div>
  );
}

export default Sugardbare;