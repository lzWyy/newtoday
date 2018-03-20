require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './home/home'
import {Video} from './video/video'
import Mine from './mine/mine'

const tab = [
  {name: '首页', IconUrl: '../images/home.png', path: '/home/recommend'},
  {name: '西瓜视频', IconUrl: '../images/shiping.png', path: '/video'},
  {name: '微头条', IconUrl: '../images/toutiao.png', path: '/bb'},
  {name: '我的', IconUrl: '../images/mine.png', path: '/mine'}
]

const TabBar = (props) => {
  const tabItem = props.tabList.map((item, index) => {
    return (
      <div className="tabItem" key={index}>
        <NavLink exact to={item.path}>
          <img className="tabBarImg" src={item.IconUrl} alt="pic"/>
          <div className="tabbarText">{item.name}</div>
        </NavLink>
      </div>
    )
  })
  return (
    <div className="tabBar">
      {tabItem}
    </div>
  )
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Router>
          <div className="route">
            <div className="routerView">
              <Route path="/home" component={Home}/>
              <Route path="/video" component={Video}/>
              <Route path="/mine" component={Mine}/>
            </div>
            <TabBar tabList={tab}/>
          </div>
        </Router>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
