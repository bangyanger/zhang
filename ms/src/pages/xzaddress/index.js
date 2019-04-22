import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import  './index.scss'

export default class Test extends Taro.Component {

  config = {
   navigationBarTitleText: '首页'
  };

  render() {
    return (
      <View className="main">
        <Text> Test </Text>
      </View>
    );
  }
}
