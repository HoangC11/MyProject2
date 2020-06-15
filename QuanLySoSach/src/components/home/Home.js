


import React from 'react';
import { Button, Image, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Sizes } from '@dungdang/react-native-basic'
import DonHangTuan from './tabHome/DonHangTuan'
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      selectedTab: false,
    }
  }
  componentDidUpdate(prev) {
    if (this.props.responseDonHang !== prev.responseDonHang) {
      if (this.props.responseDonHang !== undefined) {
        this.setState({
          data: this.props.responseDonHang
        })
      }
    }
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selectedTab: !this.state.selectedTab
              })
            }}
            style={[styles.touch, {
              backgroundColor: !this.state.selectedTab ? '#335272' : 'silver',
              marginLeft: Sizes.h20,
              borderTopLeftRadius: Sizes.h40,
              borderBottomLeftRadius: Sizes.h40
            }]}
          >
            <Text
              style={[styles.titleTab, {
                color: !this.state.selectedTab ? 'white' : 'gray'
              }]}
            >Tuần</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selectedTab: !this.state.selectedTab
              })
            }}
            style={[styles.touch, {
              backgroundColor: this.state.selectedTab ? '#335272' : 'silver',
              marginRight: Sizes.h20,
              borderTopRightRadius: Sizes.h40,
              borderBottomRightRadius: Sizes.h40
            }]}
          >
            <Text style={[styles.titleTab, {
              color: this.state.selectedTab ? 'white' : 'gray'
            }]}>Tháng</Text>
          </TouchableOpacity>
        </View>

        {!this.state.selectedTab ?
          (
            <DonHangTuan />
          )
          :
          (
            <View></View>
          )
        }
      </View>
      // <SafeAreaView style={{ flex: 1 }}>
      //   <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      //     <FlatList
      //       data={this.state.data}
      //       renderItem={({item, index}) => {
      //         return (
      //           <View style={{ width: '100%', height: 50, backgroundColor: 'green' }}>
      //             <Text>{item["tenKhachHang"]}</Text>
      //           </View>

      //         )
      //       }}
      //     />
      //   </View>

      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  tab: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: Sizes.h20,
    elevation: 8
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Sizes.h20,
    marginVertical: Sizes.h20,

  },
  titleTab: {
    fontSize: Sizes.s40,
    fontWeight: 'bold',
  }
})