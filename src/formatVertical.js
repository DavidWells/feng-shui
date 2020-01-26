/* align vertical flex values */
export default function mapVerticalValue (verticalAlign, isColumn) {
  switch (verticalAlign) {
    case 'top':
    case 'flex-start':
      return 'flex-start'
    case 'bottom':
    case 'flex-end':
      return 'flex-end'
    case 'middle':
    case 'center':
      return 'center'
    case 'full':
    case 'fill':
    case 'stretch':
      return 'stretch'
    case 'space-around':
      return 'space-around'
    case 'space-between':
      return 'space-between'
    default:
      return (isColumn) ? 'flex-start' : 'center'
  }
}
