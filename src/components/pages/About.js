import React, { useState, useEffect } from 'react'
function About() {
  useEffect(() => {
    fetchItems()
  }, [])
  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch(
      'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2022-07-28&' +
        'sortBy=popularity&' +
        'apiKey=e2e918acec174eb3be9687622865438f',
    )
    const items = await data.json()
    console.log(items.articles)
    setItems(items.articles)
  }
  return (
    <div className="container d-flex mt-5">
      {items.map((articles) => (
        <div className="items">
          <img id="ApiImages" src={`${articles.urlToImage}`} alt="Icon" />
          <h4>{articles.title}</h4>
          <p>by-<strong> {articles.author}</strong></p>
          <p>{articles.description}<a href={articles.url} target="_blank" rel="noreferrer" className="d-block btn btn-dark mt-3" title='From site'> Read More</a></p>
          <p>Published At- {articles.publishedAt}</p>
        </div>
      ))}
    </div>
  )
}
export default About
