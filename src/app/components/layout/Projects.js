'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import projects from "@/app/data/db";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() { 
    const lastProjects = projects.slice(-4);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [modalProject, setModalProject] = useState(null);

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


    const openModal = (project) => {
        setModalProject(project);
      };
    
      const closeModal = () => {
        setModalProject(null);
      };
    
    const getLinkStyle = (website) => {
        let style = styles.defaultLink; // Estilo padrão
        if (website === "Building !") {
            style = styles.orangeLink;
        } else if (website === "Visite the website") {
            style = styles.blueLink;
        } else if (website === "Without deploy yet") {
            style = styles.redLink;
        }
        return style;
    };

    return (
        <section id="projects" className="mt-10 text-white">
            <h1 className="text-4xl mb-5 font-semibold">My top 4 projects</h1>
            <blockquote className="italic mb-5">
            &quot;The knowledge gained from building real projects is a significant part 
                of the learning process that helps us evolve in our work.&quot;
            </blockquote>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {lastProjects.map((project) => (                    
                    <div 
                        key={project.id} 
                        className={ `bg-gray-800 p-4 rounded-lg flex flex-col justify-between ${hoveredProject === project.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}>
                        <div className="mb-5">        
                            <button onClick={() => openModal(project)}>
                                <Image src={project.img} alt="landing page" width={444} height={22} className={styles.imageProjects} />
                            </button>                           
                            <h2 className="text-xl font-semibold mb-2 mt-5">{project.title}</h2>
                        </div>
                        <div id="content" className="flex justify-between items-center m-2">
                            <div className="mr-8">
                                <p className="text-gray-300 mb-8">{project.description}</p>
                                <Link className={`${getLinkStyle(project.website)} px-4 py-2 mt-4 hover:bg-blue-800 rounded-lg`} href={project.url} target="blank">{project.website} </Link>
                            </div>
                            <div id="contentecs" className="mb-5 bg-gray-700 px-5 py-2 pb-3 rounded-lg shadow-lg" style={{ maxWidth: "400px" }}>
                                <p className="mt-5 mb-2">Technologies</p>
                                <div className="flex flex-wrap "> 
                                    {project.technologies.map((technology, index) => (
                                        <Image alt="logoSkill" 
                                        key={index} src={technology} width={22} height={22} 
                                        className={styles.image} style={{ flex: "0 0 30px", maxWidth: "50px"}} /> 
                                    ))}
                                </div>
                                <Link  href={project.giturl} target="_blank" rel="noopener noreferrer">
                                    <p id="github" className="mt-5 mb-2">Link Github</p>                                        
                                    <Image id="github"  src="/github.png" alt="githublogo" width={22} height={22} className={styles.image} />
                                </Link>                                                                    
                            </div>                      
                        </div>
                    </div>
                ))}
                {modalProject && <ProjectModal project={modalProject} onClose={closeModal} />}
            </div>
            <div>
            <Link id="btnSeeMore" className='flex justify-center bg-gray-800 text-white font-semibold rounded-lg mt-5 py-5' href={'/pages/projects'}>
                See More Projects
            </Link>
            </div>
        </section>
    );
}
