import React from 'react'
import m from './LinksList.module.css'
import img1 from '../pages/img/1.jpg'

export const Hotelinfo = ({ links }) => {
  // if (!links.length) {
  //   return <p className="center">Ссылок пока нет</p>
  // }

  return (
    <>
      <div className={m.hotelinfo}>
        <div className={m.right}>
          <img src={img1} />
        </div>
        <div className={m.left}>
          <div className={m.content}>
            <h1>hotel idea</h1>
          </div>
        </div>
      </div>
    </>
  )
}


{/* <Link to={`/detail/${link._id}`}>Открыть</Link> */ }