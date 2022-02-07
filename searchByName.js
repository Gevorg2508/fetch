const apiUrl = "https://restcountries.com/v3.1";
async function fetchPosts() {
    try {
        const response = await fetch(`${apiUrl}/name`);

        if (!response.ok) {
            throw new Error(`failed to fetch ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

function listPosts(postContainerElementId) {
    const postContainerElement = document.getElementById(postContainerElementId);
    if (!postContainerElement) {
        return;
    }

    fetchPosts().then(posts => {
        if(!posts){
            postContainerElement.innerHTML = "No posts fetched.";
            return;
        }

        for(post of posts){
            postContainerElement.appendChild(postElement(post));
        }
     })
        .catch(e => {
            console.log(e);
        })
}

function postElement(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/name/${post.common}`)
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innerText = capitalizeFirstLetter(post.title)

    postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);



    return postTitleElement;
}
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


