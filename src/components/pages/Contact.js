import React, { useState, useEffect } from 'react'
function Contact() {
  useEffect(() => {
    fetchItems()
  }, [])
  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCOlTnJzJzwcAWR4Sid09eqJda0gn8ONbU',
    )
    const items = await data.json()
    console.log(items.items)
    setItems(items.items)
  }
  return (
    <div className="container d-flex mt-5">
      {items.map((items) => (
        <div className="items">
          <img id="ApiImages" src={`${items.urlToImage}`} alt="Icon" />
          <h3>{items.snippet.channelTitle}</h3>
          <h5>{items.snippet.localized.title}</h5>
          <p>{items.snippet.localized.description}</p>
          <h4>{items.snippet.categoryId}</h4>
          <video src={`https://www.youtube.com/watch?v=${items.id}}`}></video>
        </div>
      ))}
    </div>
  )
}
export default Contact;
