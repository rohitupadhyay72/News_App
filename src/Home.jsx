import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setPage] = useState(1)

    const apiKey = process.env.REACT_APP_NEWS_API_KEY;


    async function getAPIData() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=24&language=${props.language}&sortBy=publishedAt&apiKey=${apiKey}`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }
    let fetchData = async () => {
        setPage(page + 1)
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&pageSize=24&language=${props.language}&sortBy=publishedAt&apiKey=${apiKey}`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(articles.concat(response.articles))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [props])
    return (
        <>

            <div className="container-fluid text-center background p-2 text-light mt-1">
                <h5>{props.q} Articles</h5></div>
                <InfiniteScroll
                    dataLength={articles.length } //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length < totalResults}
                    loader={<div className='my-5 text-center'>
                        <div className="spinner-border my-5" role="status">
                            <span className="sr-only text-center"></span>
                        </div>
                    </div>}
                >
                    <div className="row">
                        {
                            articles.map((item, index) => {
                                return <Newsitem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    publishedAt={item.publishedAt}
                                    source={item.source?.name}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            {/* </div> */}
        </>
    )
}
