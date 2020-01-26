import React from 'react'
import Flex from '../src/Flex'
import Column from '../src/Column'
import Row from '../src/Row'

const demo1 = (
  <Row debug={false} align='left stretch' style={{background: 'yellow'}} >
    <Column style={{background: 'green'}} align="center bottom">
      <Row style={{height: 80, padding: 20}} align='left'>
        <div>Nav item 1</div>
        <div>Nav item 2</div>
      </Row>
      <span>height</span>
      <span>hshshsshsh</span>
      <span>Yo</span>
    </Column>
    <Column debug style={{background: 'lightblue'}} >
      <Row height={80} align='center top'>
        <div>Nav item 1</div>
        <div>Nav item 2</div>
      </Row>
      <span>height</span>
      <span>hshshsshsh</span>
      <span>Yo</span>
    </Column>
    <Column debug style={{background: 'orange'}} >
      <Row debug style={{height: 80, padding: 20}} align='center'>
        <div>Nav item 1</div>
        <div>Nav item 2</div>
      </Row>
      <span>height</span>
      <span>hshshsshsh</span>
      <span>Yo</span>
    </Column>
  </Row>
)

const demo2 = (
  <Column style={{width: '80%', margin: 'auto', height: '100%', background: 'lightblue'}}>
    <Row debug style={{height: 80, padding: 20}}
      //align={{'horizontal': 'left', vertical: 'bottom'}}
    >
      <div>Nav item 1</div>
      <div>Nav item 2</div>
    </Row>

    {demo1}

  </Column>
)


const threeCol = (
  <Column style={{width: '80%', margin: 'auto', height: '100%', background: 'lightblue'}}>
    <Row style={{height: 80, padding: 20}}
      align={{'horizontal': 'left', vertical: 'top'}}>
      <div>Nav item 1</div>
      <div>Nav item 2</div>
    </Row>

    <Row id="test" align="left full" style={{flexGrow: 2}}>
      <Column style={{background: 'green'}} >
        <span>height</span>
        <span>hshshsshsh</span>
        <span>Yo</span>
      </Column>
      <Column debug style={{background: 'lightblue', height: '100%'}} >
        <span>height</span>
        <span>hshshsshsh</span>
        <span>Yo</span>
      </Column>
      <Column debug style={{background: 'orange'}} >
        <span>height</span>
        <span>hshshsshsh</span>
        <span>Yo</span>
      </Column>
    </Row>
  </Column>
)

const Demo = () => {
  return demo2
}

export default Demo
