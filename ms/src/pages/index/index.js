import Taro, { Component } from '@tarojs/taro'
import { View,Button, Navigator,Map,CoverImage,CoverView} from '@tarojs/components'
import './index.scss'
import location from "../../images/location.png"
import my from "../../images/my.png";
import {connect} from "@tarojs/redux"

 class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
      super(props)
      this.state={
        markers: [{
          iconPath: '/resources/others.png',
          id: 0,
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          width: 50,
          height: 50
        }],
        
        longitude:"",
        latitude:""
      }
  }

  componentWillMount () { 
   

  }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }
  clickcontrol=(e)=>{
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
 }

  componentDidShow () {
    Taro.getLocation({
      type: 'wgs84',
      success:(res)=> {
        this.setState({
          latitude : res.latitude,
          longitude : res.longitude
        })
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
   }

  componentDidHide () { }
  
  
  render () {
    return (
      <View className='index'>
        <Map
          id="map"
          longitude={this.state.longitude}
          latitude={this.state.latitude}
          scale="16"
          bindcontroltap="controltap"
          markers={this.state.markers}
          showLocation="true"
        ></Map>
        <CoverView className="coverview">
          <CoverImage src={location} onClick={this.clickcontrol} className="img_left"></CoverImage>
          <CoverImage src={my} className="img_right"></CoverImage>
          <Navigator  url="/pages/interview/index">
            <Button >添加面试</Button>
          </Navigator>
       </CoverView>
      
      </View>
   
    )
  }
}
let defaultprops=(state)=>{
   return state
}
export default connect(defaultprops,null)(Index) 
