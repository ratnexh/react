import React, { useState, useEffect } from 'react'
function About() {
  useEffect(() => {
    fetchItems()
  }, [])
  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v1/banners')
    const items = await data.json()
    console.log(items.data)
    setItems(items.data)
  }
  return (
    <div className="container d-grid mt-5">
      {items.map((item) => (
        <div className='items'>
          <img src={`${item.images.smallIcon}`} alt="Icon" />
          <p key={item.id}>
            <strong>{item.devName}</strong>
          </p>
        </div>
      ))}
    </div>
  )
}
export default About
