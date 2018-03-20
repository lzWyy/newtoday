import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './home.css';
import Recommend from './Subpage/recommend';
import HotNews from './Subpage/hotNews'

const Search = () => {
  return (
    <div>
      <div className="search">
        <input className="searchPut" type="text"/>
        <div className="pushThing">
          <span>+</span>
          <sapn>发布</sapn>
        </div>
      </div>
      <NavBar/>
    </div>
  )
}
const NavBar = () => {
  const navList = [
    {name: '推荐', path: '/home/recommend'},
    {name: '热点', path: '/home/hotnews'},
    {name: '视频', path: '/dd'},
    {name: '新时代', path: '/dd'},
    {name: '图片', path: '/dd'},
    {name: '科技', path: '/dd'},
    {name: '娱乐', path: '/dd'},
    {name: '问答', path: '/dd'},
    {name: '财经', path: '/dd'}
  ]
  const navbar = navList.map((item, index) => {
    return (
      <div key={index}>
        <Link to={item.path}>{item.name}</Link>
      </div>
    )
  })
  return (
    <div className="navbar">
      {navbar}
    </div>
  )
}

export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  // show = () => {
  //   console.log(this.refs.homeView.offsetHeight)
  //   const viewsHeight = this.refs.homeView.offsetHeight
  //   const scrollTop = this.refs.homeView.scrollTop
  //   // console.log(this.refs.homeView.scrollTop)
  // }
  componentDidMount () {
    window.addEventListener('scroll', this.scrolldd)
  }
  render () {
    return (
      <div className="home">
        <Router>
          <div className="homeRouter">
            <Search/>
            <div className="homeview">
              <Route exact path="/home/recommend" component={Recommend}/>
              <Route exact path="/home/hotnews" component={HotNews}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}