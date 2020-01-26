/* align horizontal flex values */
export default function mapHorizontalValue (horizontalAlign) {
  switch (horizontalAlign) {
    case 'left':
    case 'flex-start':
      return 'flex-start'
    case 'right':
    case 'flex-end':
      return 'flex-end'
    case 'middle':
    case 'center':
      return 'center'
    case 'space-around':
      return 'space-around'
    case 'space-between':
      return 'space-between'
    default:
      return 'flex-start'
  }
}
