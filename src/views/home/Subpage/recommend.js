import React, {Component} from 'react'
import '../home.css'
import axios from 'axios'
import {Word, Finance, Videos} from '../../../config/templates'

export default class Recommend extends Component {
  constructor (props) {
    super (props),
    this.state = {
      recommend: []
    }
  }
  show = () => {
    if (!this._type) {
      this._type = true
      setTimeout(() => {
        this.scrollGet()
        this._type = false
      }, 1000)
    }
  }
  scrollGet = () => {
    let viewHeight = this.refs.recommend.offsetHeight,
      screenHeight = this.refs.loading.offsetTop - 75,
      scrollHeight = this.refs.recommend.scrollTop + viewHeight
    if (scrollHeight > screenHeight) {
      if (!this._getList) {
        this._getList = true
        this.getList().then(() => {
          this._getList = false
        })
      }
    }
  }
  getList = () => {
    return new Promise((resolve) => {
      axios.get('/api/list').then((res) => {
        let arr = this.state.recommend
        res.data.map((item) => {
          arr.push(item)
        })
        this.setState({recommend: arr})
        resolve()
      })
    })
  }
  componentDidMount () {
    this.getList()
  }
  render () {
    const CardList = this.state.recommend.map((item, index) => {
      switch (item.tag) {
        case 'word':
          return <Word card={item} key={index}/>
          // break
        case 'finance':
          return <Finance card={item} key={index}/>
          // break
        case 'video':
          return <Videos card={item} key={index}/>
          // break
      }
    })
    return (
      <div className="recommend" ref="recommend" onTouchMove={this.show}>
        {CardList}
        <div className="loading" ref="loading" onClick={this.show}>
          <img className="lodingimg" src="../../../images/loading.png"/>
          <span>加载中……</span>
        </div>
      </div>
    )
  }
}