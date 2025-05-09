import test from './newstest.json'
import { useEffect, useState } from 'react';
import './styles/News.css'
import axios from 'axios';
import notfound from './assets/image-off-svgrepo-com.svg'
function News() {
    const [response, setResponse] = useState(test)

    useEffect(() => {
        console.log("Sending Request");
        axios.get(`https://newsapi.org/v2/everything?q=weather+India&sortBy=publishedAt&apiKey=35c39d22f0744c99bc27e6ba1748a895`)
            .then((response) => {
                setResponse(response)
            })

            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <h1 style={{ margin: "20px", textAlign: "center", fontSize: "50px" }} >Feed</h1>
            <div className='article-container'>
                {
                    response.data.articles.filter((item, index) => item.author && item.content !== "").map((article, key) => (
                        <div className='newsArticle' key={key} >
                            <h3>{article.title}</h3>
                            <img src={article.urlToImage ? article.urlToImage : notfound} width="200px" alt="Could not Load Image" />
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: article.content.split("[")[0] + `` }} ></div><a target='blank' href={article.url}>read More</a>
                            </div>
                            <div>
                                <div><b>Published At : </b> {article.publishedAt.split("T")[0]} / {article.publishedAt.split("T")[1].replace("Z", "")}</div>
                                <div style={{ textOverflow: "hidden" }}><b>Authored by : </b> {article.author.split(",")[0]}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default News