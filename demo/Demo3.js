import React from 'react'
import Column from '../src/Column'
import Row from '../src/Row'

/*
<div class="Demo Demo--spaced">
  <div class="Media">
    <img class="Media-figure Image" src="/solved-by-flexbox/images/kitten.jpg" alt="Kitten">
    <div class="Media-body">
    <h3 class="Media-title">Standard Media Object</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
    </div>
  </div>
</div>
 */

const mediaObject = (
  <Row align='left top' width={'400'} style={{background: 'purple'}} >
    <Column className="Media">
      <img className="Media-figure Image" src="https://philipwalton.github.io/solved-by-flexbox/images/kitten.jpg" />
    </Column>
    <Column className="Media-body" align="left top" height={550}>
      <div className="Media-title">Standard Media Object</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
      <Column align='right bottom' width={'100%'} grow={1}>
        <a style={{alignSelf: 'flex-end'}}>test</a>
      </Column>
    </Column>
  </Row>
)

const Demo = () => {
  return mediaObject
}

export default Demo
