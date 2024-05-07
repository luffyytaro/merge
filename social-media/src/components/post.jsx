export default function Post(){
    let post = (new Array(10)).fill("Post");
    return(
        <section>
            {post.map((item, index) =>{
                <article key={index}>
                    <div className="h-12 bg-blue-400"></div>
                    <div className="w-fill aspect-square bg-black">new-post</div>
                    <div className="h-8 w-full bg-blue-900"></div>
                    <div className="w-full">Description</div>
                    {item}
                </article>
            })}
        </section>
    );
}