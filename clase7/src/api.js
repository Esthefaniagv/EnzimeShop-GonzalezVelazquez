import axios from "axios";

const getPhotos = async () => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID vPQJJlVY8Qa_9BuEvXvPkTBZpSLG1FAnPNtCjglXwZQ"
        },
        params: {
            query: "Cats"
        }
    })

    console.log(response);
    return response

}

export default getPhotos;