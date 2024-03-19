'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css"
import projects from "@/app/data/db";

export default function ProjectPage() {
    
    const [hoveredProject, setHoveredProject] = useState(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        const handleMediaQueryChange = (mediaQuery) => {
            setIsMobile(mediaQuery.matches);
        };

        handleMediaQueryChange(mediaQuery); 
        mediaQuery.addListener(handleMediaQueryChange); 

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange); 
        };
    }, []);

    return (
        <section currentpage="projects"  className="mt-32 text-white max-w-5xl mx-auto p-4">
            <h1 className="text-4xl mb-5 font-semibold" >Projects</h1>
            <blockquote className="italic mb-5">
            &quot;The knowledge gained from building real projects is a significant part 
                of the learning process that helps us evolve in our work.&quot;
            </blockquote>

            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {projects.map((project) => (                    
                    <div 
                    key={project.id} 
                    className={`bg-gray-800 p-4 rounded-lg flex flex-col justify-between ${hoveredProject === project.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}>
                    <div >        
                        <Link href={project.url} target="_blank" rel="noopener noreferrer" >                    
                            <Image src={project.img} alt='landing page' width={444}  height={22} className={styles.imageProjects}/>
                        </Link>                            
                        <h2 className="text-xl font-semibold mb-2 mt-5">{project.title}</h2>
                    </div>
                    <div id="content" className="flex justify-between items-center ">
                        <div id="contentDescription" className="mr-10">
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                            <div id="contentecs" className="mb-5" >
                                <p className="mt-5 mb-2">Technologies</p>
                                <div className="flex"> 
                                    {project.technologies.map((technology, index) => (
                                        <Image alt="logoSkill" key={index} src={technology} width={22}  height={22} className={styles.image} /> 
                                    ))}
                                </div>
                                    <Link  href={project.giturl} target="_blank" rel="noopener noreferrer">
                                        <p id="github" className="mt-5 mb-2">Link Github</p>                                        
                                        <Image id="github"  src="/github.png" alt="githublogo" width={22}  height={22} className={styles.image} />
                                    </Link>                                                                    
                            </div>                            
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}
