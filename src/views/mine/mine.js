import React from 'react'
require('./mine.css')

const MineLogin = () => {
  if (true) {
    return (
      <div className="mineLogin">
        <img className="avtar" src="../../images/avtar.jpeg"/>
        <span>schema</span>
      </div>
    )
  } else {
    return (
      <div className="mineLogin">
        <div className="avtar">
        </div>
        <span>name</span>
      </div>
    )
  }
}
const MineNavBar = () => {
  const mineList = [
    {name: '收藏', iconPath: '../../images/shoucang.png'},
    {name: '历史', iconPath: '../../images/history.png'},
    {name: '夜间', iconPath: '../../images/night.png'}
  ]
  const mineItem = mineList.map((item, index) => {
    return (
      <div className="mineItem" key={index}>
        <img className="minebarIcon" src={item.iconPath}/>
        <span>{item.name}</span>
      </div>
    )
  })
  return (
    <div className="minebar">
      {mineItem}
    </div>
  )
}
const LineItem = (props) => {
  return (
    <div className="baritem item1">
      <p>{props.name}</p>
      <span>></span>
    </div>
  )
}
const Items = (props) => {
  return (
    <div className="baritem">
      <p>{props.name}</p>
      <span>></span>
    </div>
  )
}

const ListBar = (props) => {
  return (
    <div className = "listbar">
      {props.children}
    </div>
  )
}

export default class Mine extends React.Component {
  render () {
    return (
      <div className="mine">
        <MineLogin/>
        <MineNavBar/>
        <ListBar>
          <LineItem name="我的关注"/>
          <Items name="消息通知"/>
        </ListBar>
        <ListBar>
          <LineItem name="头条商城"/>
          <Items name="京东特供"/>
        </ListBar>
        <ListBar>
          <LineItem name="用户反馈"/>
          <Items name="系统设置"/>
        </ListBar>
      </div>
    )
  }
}