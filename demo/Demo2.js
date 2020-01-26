import React from 'react'
import Column from '../src/Column'
import Row from '../src/Row'

const demo = (
  <Row align='left fill' style={{background: 'purple'}} >
    <Column debug style={{width: 80, background: 'green'}} >
      <span>icons</span>
      <span>icons</span>
      <span>icons</span>
      <span>icons</span>
    </Column>
    <Column style={{background: 'lightblue', width: 0}} >
      <Row height={80} align='left'>
        <div>Nav item 1 | </div>
        <div>Nav item 2</div>
      </Row>
      <span>
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
      </span>
    </Column>
    <Column debug style={{background: 'orange', width: '300px'}} >
      <span>
        Sidebar - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
      </span>
    </Column>
  </Row>
)

const Demo = () => {
  return demo
}

export default Demo
