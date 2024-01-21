import globals from 'app/globals.css';
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Make sure to install this package


const projects = [
    // Add your project details here
    // Example:
    { title: 'Project 1', description: 'Description 1', imageUrl: '/images/1.jpeg' },
    { title: 'Project 2', description: 'Description 2', imageUrl: '/images/2.jpeg' },
    { title: 'Project 3', description: 'Description 2', imageUrl: '/images/3.webp' },
    { title: 'Project 4', description: 'Description 2', imageUrl: '/images/4.webp' },
    { title: 'Project 5', description: 'Description 2', imageUrl: '/images/5.webp' },
    { title: 'Project 6', description: 'Description 2', imageUrl: '/images/6.jpg' },
    { title: 'Project 7', description: 'Description 2', imageUrl: '/images/7.jpg' },
    { title: 'Project 8', description: 'Description 2', imageUrl: '/images/8.jpg' },
    { title: 'Project 9', description: 'Description 2', imageUrl: '/images/9.jpg' },
    { title: 'Project 10', description: 'Description 2', imageUrl: '/images/10.jpg' },
    { title: 'Project 11', description: 'Description 2', imageUrl: '/images/11.png' },
    { title: 'Project 12', description: 'Description 2', imageUrl: '/images/12.jpeg' },
    // ... up to 12 projects
];

const ProjectCard = ({ title, description, imageUrl }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3, // Adjust threshold for better animation trigger
    });
  
    return (
      <div ref={ref} className={`group cursor-pointer overflow-hidden bg-[#a41c44] rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 ${inView ? 'opacity-100 translateY-0' : 'opacity-0 -translate-y-10'}`}>
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover"/>
          <div className="p-4">
              <h3 className="text-white text-lg font-bold">{title}</h3>
              <p className="text-gray-300">{description}</p>
          </div>
      </div>
    );
  };
  
  const Projecten = () => {
    return (
      <div className="bg-[#ffffff]">
        <div className="container mx-auto p-4 max-w-full">
          <h2 className="text-3xl font-bold text-center mb-8">/projecten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))} 
          </div>
        </div>
      </div>
    );
  }
  
  export default Projecten;
  
<style>
  {`
    .translateY-0 {
      transform: translateY(0);
    }
    .opacity-100 {
      opacity: 1;
      transition: opacity 3s ease-out, transform 3s ease-out; // Slowed down to 1 second
    }
    .opacity-0 {
      opacity: 0;
    }
    .-translate-y-10 {
      transform: translateY(-10px);
      transition: transform 3s ease-out; // Slowed down to 1 second
    }
  `}
</style>