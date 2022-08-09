(function () {
    const posts = [
        {
            id: "1",
            title: "Construction",
            description: "Our mission is to make your construction process as smooth as possible.",
            image: "img/services/construction.png",
        },
        {
            id: "2",
            title: "Design-Build",
            description: "We have experience and industry network to deal with comprehensive project demands.",
            image: "img/services/design-build.png",
        },
        {
            id: "3",
            title: "Preconstruction",
            description: "We start with accurate project planning of your dream construction design.",
            image: "img/services/preconstruction.jpg",
        },
        {
            id: "4",
            title: "Interior Design",
            description: "Need a unique interior design? We can turn any idea into reality.",
            image: "img/services/interior design.png",
        },
        {
            id: "5",
            title: "General Contracting",
            description: "We make responsible decisions every step of the way to achieve quality construction.",
            image: "img/services/general contracting.jpg",
        },
        {
            id: "6",
            title: "Construction Management",
            description: "Our managers control the construction process at every stage.",
            image: "img/services/construction management.png",
        },
        {
            id: "7",
            title: "Property Development",
            description: "We work with well-known funders, builders, and owners to implement pojects.",
            image: "img/services/property development.png",
        },
        {
            id: "8",
            title: "Project Estimation",
            description: "Our huge database of projects allows us to create budget estimates with accuracy.",
            image: "img/services/project estimation.png",
        },
        {
            id: "9",
            title: "Renovations",
            description: "We offer all kinds of renovations and alterations to make your home comfortable.",
            image: "img/services/renovations.jpg",
        }
    ];

    function renderPosts(posts) {
        const postContainer = document.querySelector('.post__list');
        postContainer.innerHTML = '';
        for (const post of posts) {
            postContainer.innerHTML += ` 
            <figure class="posts">
            <div>
                <div class="posts__photo" style="background-image: url('${post.image}')"></div>
                <div>
                    <h4>${post.title}</h4>
                    <p>${post.description}</p>
                </div>
            </div>
            <figcaption>
                <div>
                    <a href="#">LEARN MORE</a> <span class="tack">&#129042</span>
                </div>
            </figcaption>
            </figure>`;
        }
    }
    renderPosts(posts);
})();