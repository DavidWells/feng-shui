import React from 'react'
import Column from '../src/Column'
import Row from '../src/Row'
import Fixed from '../src/Fixed'
import styles from './styles/demo4.css'

var ps = (
   <div>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis. Vestibulum at sem massa, in tempus nisi. Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. Quisque eget massa a massa semper mollis.
     </p>
   </div>
)

const headerFooterStyle = {
  background: '#333'
}

const goldenLayout = (
  <Column>
    <Row align='center' height='10vh' style={headerFooterStyle}>
      <h1>React Layout Component Suite</h1>
    </Row>

    <Row height='80vh' align='left top' style={{overflow: 'auto'}}>
      <nav style={{width:180, height: '80vh', position: 'relative', flexShrink: 0}}>
        <Fixed style={{color: 'green'}}>
          {ps}sss
        </Fixed>
      </nav>
      <section className={`${styles.content}`} style={{flexGrow: 1}}>
        <Fixed addBumper style={{background: 'green'}}>
          Fixed heading
        </Fixed>
        <div style={{padding: 15}}>
        <h2 style={{margin: 0}}>very top</h2>
        {ps} {ps} {ps}
        </div>
      </section>
      <div style={{width:280, flexShrink: 0}} >
        <Fixed className={`${styles.aside}`}>
          <Fixed addBumper style={{background: 'red'}}>
            Fixed sidebar heading
          </Fixed>
          {ps} {ps} {ps}

        </Fixed>
      </div>
    </Row>

    <Row height='10vh' style={headerFooterStyle}>
      <span className='flexbox-item angleBrackets'>Left aligned footer</span>
    </Row>
  </Column>
)

const Demo = () => {
  return goldenLayout
}

export default Demo
