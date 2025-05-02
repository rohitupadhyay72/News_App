import React from 'react'
import { Link } from 'react-router-dom'

export default function Newsitme(props) {
  return (
    <>
      <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6" >
        <img src={props.pic ? props.pic : "/image/no_img.png"} className="card-img-top" height={200} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="source">
            <p>{props.source}</p>
            <p>{new Date(props.publishedAt).toLocaleDateString()}</p>
          </div>
          <p className="card-text">{props.description}</p>
          <Link href="#" className="btn background text-light w-100" to={props.url} target='_blank'>Read More</Link>
        </div>
      </div>
    </>
  )
}
