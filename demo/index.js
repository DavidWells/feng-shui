/*eslint-disable import/default*/
import React from 'react'
import { render } from 'react-dom'
import Demo from './Demo'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import './styles/styles.css'

render(<Demo4 />, document.getElementById('app'))

// <app>
//   <header>
//     links and profile
//   </header>
//   <row>
//     <sidebar>sidebar</sidebar>
//     <content>whatever the app does here</content>
//   </row>
//   <footer>
//   blah
//   </footer>
// </app>