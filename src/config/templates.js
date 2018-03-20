import React from 'react'
import '../styles/templates.css'
// import {BrowserRouter as Router, NavLink} from 'react-router-dom';

const Hot = (props) => {
  if (props.hot) {
    return <span className="tagRed">热</span>
  } else {
    return (<br/>)
  }
}

const MakeTop = (props) => {
  if (props.tops === '置顶') {
    return <span className="tagRed">置顶</span>
  } else {
    return (<br/>)
  }
}

export const Tags = (props) => {
  return (
    <div className="tags">
      <MakeTop tops={props.tags.label}/>
      <Hot hot={props.tags.hot}/>
      <span>{props.tags.source}</span>
      <span>{props.tags.comment_count}评论</span>
      <span>{props.tags.datetime}</span>
    </div>
  )
}

export const Word = (props) => {
  return (
    <div className="card">
      <a href={props.card.article_url}>
        <div className="word">
          <div className="wordtext">
            <p className="cardP">{props.card.title}</p>
            <Tags tags={props.card}/>
          </div>
          <img className="cardImg" src={props.card.imgUrl} />
        </div>
      </a>
    </div>
  )
}

export const Finance = (props) => {
  return (
    <div className="card">
      <a href={props.card.article_url}>
        <div className="finance">
          <p className="cardP">{props.card.title}</p>
          <div className="finance_img">
            <img className="cardImg" src={props.card.imgUrl[0]} />
            <img className="cardImg" src={props.card.imgUrl[1]} />
            <img className="cardImg" src={props.card.imgUrl[2]} />
          </div>
          <Tags tags={props.card}/>
        </div>
      </a>
    </div>
  )
}

export const Videos = (props) => {
  return (
    <div className="card">
      <a href={props.card.article_url}>
        <div>
          <p className="cardP">{props.card.title}</p>
          <video className="video_box" src={props.card.videoUrl}>
          您的浏览器不支持 video 标签。
          </video>
          <Tags tags={props.card}/>
        </div>
      </a>
    </div>
  )
}