'use client'

import Image from "next/image"
import styles from "./header.module.css"; 

export default function Skillssection() {

    return(
        <section id="skills" className="mt-10 text-white">
            <h1 className="text-4xl mb-5 font-semibold" >Tecnologies</h1>
            <blockquote className="italic mb-5">
            &quot;When you first learn how to understand and read technologies/frameworks, you can work and be a professional in any of them.&quot;
            </blockquote>

            <div className="bg-gray-800 p-10 rounded-lg">
                <h2 className="text-2xl">Here are some technologies that I have been using in my projects:</h2>

                <div className="flex text-blue-900 mt-5 ml-5 ">
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/html.png" alt="html" width={22} height={12} className={styles.imageIcons}/>
                        <p width={22} height={22} className="ml-2">HTML</p>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/css.png" alt="css" width={22}  height={22} className={styles.imageIcons}/>
                        <p className="ml-2">CSS</p>                    
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/js.png" alt="js" width={22}  height={22} className={styles.imageIcons}/>
                        <p className="ml-2">Javascript</p>                     
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/nodejs.png" alt="node" width={22}  height={22} className={styles.imageIcons}/>
                        <p className="ml-2">Node.js</p>                     
                    </div>
                </div>

                <div className="flex text-blue-900 mt-5 ml-5">
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/react2.png" alt="react" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">React.js</p>                    
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/next1.png" alt="next" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">Next.js</p>                     
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/angular.png" alt="angular" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">Angular</p>                     
                    </div>
                </div>

                <div className="flex text-blue-900 mt-5 ml-5">
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/mongo.png" alt="mongodb" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">MongoDb</p>                     
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/postgre.png" alt="postegre" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">PostgreSQL</p>                     
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/aws.png" alt="aws" width={22} height={22} className={styles.imageIcons}/>
                        <p className="ml-2">AWS Cloud</p>                     
                    </div>
                </div>

                <div className="flex text-blue-900 mt-5 ml-5 ">
                    <div className="flex items-center rounded-lg bg-white px-4 py-2 mr-5 w-[180px]">
                        <Image src="/tailwind.png" alt="tailwind" height={22} width={22}  className={styles.imageIcons}/>
                        <p className="ml-2">Tailwind.css</p>                    
                    </div>
                </div>
            </div>
            
        </section>
    )
}