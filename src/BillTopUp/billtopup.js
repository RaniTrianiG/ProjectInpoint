import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native';
import { Header, Container, Content, Text, Left, Right } from 'native-base';
import GridView from 'react-native-super-grid';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BPJS from '../../asset/bpjs'
import Telkom from '../../asset/telkom'
import Postpaid from '../../asset/postpaid'
import PLN from '../../asset/pln'
import PDAM from '../../asset/pdam'

export default class billtopup extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    
    const items = [
      { name: 'BPJS Kesehatan', Image:<BPJS width={140} height={50} scale={1}/> }, 
      { name: 'Telkom', Image1: <Telkom width={140} height={50} scale={1}/>},
      { name: 'Halo Postpaid', Image2: <Postpaid width={140} height={50} scale={1}/> }, 
      { name: 'PLN', Image3: <PLN width={140} height={50} scale={1}/> },
      { name: 'PDAM', Image4: <PDAM width={140} height={50} scale={1} />},
    ];

    return (
        <Container style={{backgroundColor:'#F1F2F5'}}>
            <Header noShadow={true}
            style={{backgroundColor: 'white'}}>
            <Left>
                <AntDesign 
                    style={{color: 'red', fontSize: 20}} name="arrowleft"
                    />
            </Left>
                <Text style={{color: 'black', top: 15, fontWeight:'bold', fontSize: 18, right: 10}}>Bills & Top Up</Text>
                <Right>
                    <AntDesign 
                        style={{color: 'black', fontWeight: 'bold', right: 15, fontSize: 20}} name="infocirlceo"/>
                </Right>
            </Header>
            <Content>
                <GridView
                itemDimension={130}
                items={items}
                numColumn={3}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer]}>
                    <View style={styles.Image}>{item.Image}</View>
                    <View style={styles.Image}>{item.Image1}</View>
                    <View style={styles.Image}>{item.Image2}</View>
                    <View style={styles.Image}>{item.Image3}</View>
                    <View style={styles.Image}>{item.Image4}</View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                )}
            />
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 120,
    flex: 0.25,
    backgroundColor:'white'
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  Image: {
    textAlign: 'center',
    paddingLeft: 50
  }
});
