import React, { PropTypes } from 'react'
import Flex from './Flex'

const propTypes = {
  /** propName description */
  children: PropTypes.any,
  /** classes applied to Column */
  className: PropTypes.string,
  row: PropTypes.bool,
  column: PropTypes.bool,
  auto: PropTypes.bool,
  height: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

const defaultProps = {
  width: 0,
}

const Column = ({...props}) => {
  const classes = `${props.className} column-here`
  return (
    <Flex {...props} column={true} className={classes}>
      {props.children}
    </Flex>
  )
}

Column.defaultProps = defaultProps
Column.propTypes = propTypes
Column.displayName = 'Column'

export default Column
