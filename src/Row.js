import React, { PropTypes } from 'react'
import Flex from './Flex'

const propTypes = {
  /** propName description */
  children: PropTypes.any,
  /** classes applied to Row */
  className: PropTypes.string,
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  column: PropTypes.bool,
  auto: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  fullScreen: PropTypes.bool,
}

const defaultProps = {
  width: '100%',
  debug: false,
}

const Row = ({fullScreen, ...props}) => {
  const classes = `${props.className} row-here`
  return (
    <Flex {...props} className={classes}>
      {props.children}
    </Flex>
  )
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps
Row.displayName = 'Row'

export default Row
