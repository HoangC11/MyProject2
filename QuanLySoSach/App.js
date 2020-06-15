/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage'
var db = openDatabase({ name: 'database.db', createFromLocation: '~database.db' });
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

  }
  async getData() {

    var arr = []
    await db.transaction(async (txn) => {
      await txn.executeSql(
        "SELECT * FROM KhachHang",
        [],
        async (tx, res) => {
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              await arr.push(res.rows.item(i))

            }
            this.setState({
              data: arr
            })
            // return arr
          }
        }
      );
    });
  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(prev) {

  }

  render() {
    console.log('dataaaaaaa: ', this.state.data)
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            console.log('itemmm: ', item['tenKhachHang'])
            return (
              <Text style={{ fontWeight: 'bold', fontSize: 30,  }}>{item['tenKhachHang']}</Text>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default App;
