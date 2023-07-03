console.clear()

const ed = document.createElement("div")
ed.id = "blog"

blogs = [

{"title":"Kampanjfilm för Cyan, Spring green, påsk gröna eller vad fan vi nu heter.",
"image":"cyan kampanjfilm.webp",
"url":"https://www.youtube.com/watch?v=BR1pKZsegvQ"},

{"title":"Cyan team reagerar på reddit kaos",
"image":"redit cows reagering.jpg",
"url":"https://www.youtube.com/watch?v=ZDe5jXtQ9mo"},

]





blogs.forEach(blog => {
    
    

    console.log(blog.title);
    console.log(blog.image);
    console.log(blog.url);

    function o() {
        open(blog.url);
    }

    const e = document.createElement("div")
    e.onclick = o
    const img = document.createElement("img")
    img.src = `assets/blogs/${blog.image}`
    const blog_title = document.createElement("p")
    blog_title.innerText = blog.title
    blog_title.classList.add("blog_titles")
    e.classList.add("blogs")

    e.appendChild(img)
    e.appendChild(blog_title)
    ed.appendChild(e)
        

    
    
    
});


document.body.appendChild(ed)