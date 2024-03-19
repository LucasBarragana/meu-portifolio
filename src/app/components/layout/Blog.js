'use client'

export default function BlogSection() {

    return(
        <section id="blog" className="mt-10 text-white">
            <h1 className="text-4xl mb-5 font-semibold">New Posts</h1>
            <blockquote className="italic mb-5">
            &quot; What you consume in terms of content says a lot about what you know. 
                What you know says a great deal about who you are. 
                Who you are entirely dictates your story. 
                And your story, if shared, can change lives.&quot;
            </blockquote>
            <div className="flex justify-center bg-gray-800 rounded-lg ">
                <h1 id="maintenance" className="italic text-20xl font-semibold mt-20 mb-20">Maintenance</h1> 
                <div id="background" className="flex mt-16 ml-10 bg-blue-900">!</div>       
                            
            </div>
            
        </section>
    )
}