import Taro, { Component } from '@tarojs/taro'
import { View,Text,Input,Picker,Icon,Textarea,Button} from '@tarojs/components'
import './index.scss'
import location from "../../images/location.png"
import my from "../../images/my.png"

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }
  constructor(props){
      super(props)
      this.state={
        date:"2019-4-20 16:00",
        primary:null,
        workername:"",
        workertel:""
        
        
      }
  }

  componentWillMount () { 
   

  }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }


  componentDidShow () {
   
   }

  componentDidHide () { }
  bindDateChange=(e)=>{
    this.setState({
      date:e.detail.value
    })
  }
  workername=(e)=>{
    this.setState({
      
        workername:e.detail.value
      
    })
   
  }
  workertel=(e)=>{
    this.setState({
      
        workertel:e.detail.value
      
    })
  }
  xzaddress=(e)=>{
    Taro.navigateTo({
      url:"/pages/xzaddress/index"
    })
  }
  
  render () {
    return (
      <View className='index'>
        <View class="header"> 面试信息</View>
        <View className="ul">
          <View class="li">
            <Text>公司名称</Text>
            <Input placeholder="请输入公司名称" onChange={this.workername}></Input>
          </View>
          <View class="li">
            <Text>公司电话</Text>
            <Input placeholder="请输入面试联系人电话"  onChange={this.workertel}></Input>
          </View>
          <View class="li">
            <Text>面试时间</Text>
            <View class="section">
                <Picker
                  mode="date"
                  value={this.state.date}
                  onChange={this.bindDateChange}
                >
                  <View class="Picker">
                    {this.state.date} <Icon type="info" size="23" />
                  </View>
                </Picker>
               
              </View>
          </View>
          
          <View class="li last" >
            <Text>面试地址</Text>
            <View onClick={this.xzaddress}>
              <Input placeholder="请输入公司名称"></Input>
            </View>
          </View>
        </View>

        <View class="header"> 备注信息</View>
        <Textarea placeholder="备注信息（可选，100字以内）" ></Textarea>
        <Button type ={this.state.primary}>确认</Button>
      </View>
   
    )
  }
}
