import globals from 'app/globals.css';
import React from 'react';
import Header from 'app/components/Header';

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
    return (
        <div className="relative group">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start h-full">
                    <div className="p-4">
                        <h3 className="text-white text-lg font-bold">{title}</h3>
                    </div>
                    <div className="p-4 mt-auto">
                        <p className="text-white">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projecten = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projecten;
