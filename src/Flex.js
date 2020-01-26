import React, { PropTypes } from 'react'
import mapHorizontalValues from './formatHorizontal'
import mapVerticalValues from './formatVertical'
import isArray from 'isarray'

const defaultAlignment = ['', '']

const propTypes = {
  /** propName description */
  children: PropTypes.any,
  /** classes applied to Flex */
  className: PropTypes.string,
  /** style applied to Flex */
  style: PropTypes.object,
  /**
   *  Alignment configuration:
   *  Can be a string like 'left top'
   *  an array like ['left', 'top']
   *  or object like { horizontal: 'left', vertical: 'top'}
   */
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  row: PropTypes.bool,
  column: PropTypes.bool,
  auto: PropTypes.bool,
  grow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** If true, flexbox debug mode will activate */
  debug: PropTypes.bool,
}

const defaultProps = {
  column: false,
  debug: false,
}

function getAlignment (align) {
  let alignment = defaultAlignment
  if (typeof align === 'string') {
    alignment = (align) ? align.split(' ') : defaultAlignment
    return {
      horizontal: alignment[0],
      vertical: alignment[1],
    }
  } else if (isArray(align)) {
    return {
      horizontal: align[0],
      vertical: align[1],
    }
  } else if (typeof align === 'object') {
    return align
  }

  return alignment
}

const Flex = ({className, style = {}, ...props}) => {
  /* default flex */
  const defaultFlexStyle = {
    flexDirection: 'row',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'nowrap',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch',
  }
  let settings = {}

  if (props.auto) {
    settings.flex = '0 0 auto'
  }

  if (props.column) {
    settings.flexDirection = 'column'
    // settings.flexGrow = 1
    settings.flexShrink = 1
  }

  if (props.grow) {
    settings.flexGrow = props.grow
  }

  if (!props.column) {
    if (typeof props.width === 'number') {
      settings.flexGrow = props.width
    } else if (props.width || style.width) {
      const w = props.width || style.width
      // set flexBasis to auto to stop automatic grow of flex
      settings.flexBasis = 'auto'
      settings.flexGrow = 0
      settings.flexShrink = 0
      settings.width = w
    }
  } else {
    // if column apply these width settings
    if (props.width || style.width) {
      const w = props.width || style.width
      // set flexBasis to auto to stop automatic grow of flex
      settings.width = w
      settings.maxWidth = w
    }
  }

  if (props.height || style.height) {
    // set flexBasis to auto to stop automatic grow of flex
    if (!props.column) {
      settings.flexBasis = 'auto'
      settings.flexGrow = 0
      settings.flexShrink = 0
    } else {
      // if column DO this
      settings.minWidth = 0
      settings.flexBasis = 'auto'
    }
    settings.height = props.height || style.height
  }

  const alignment = getAlignment(props.align)
  const horiz = mapHorizontalValues(alignment.horizontal)
  const vert = mapVerticalValues(alignment.vertical, props.column)

  let mappedStyle
  if (props.column) {
    const defaultflexBasis = (style && style.flexBasis) ? style.flexBasis : 'initial'
    let columnVert = (vert === 'stretch') ? 'space-between' : vert

    mappedStyle = {
      alignItems: horiz,
      justifyContent: columnVert,
      flexBasis: defaultflexBasis,
    }
  } else {
    mappedStyle = {
      alignItems: vert,
      alignContent: vert,
      justifyContent: horiz,
    }
  }

  if (!props.column && !style.height && vert === 'stretch') {
    // style.height = 'inherit'
    style.flexGrow = 1
  }

  /* add outlines for flexbox debugging */
  if (props.debug) {
    defaultFlexStyle.background = '#' + Math.floor(Math.random() * 16777215).toString(16)
    defaultFlexStyle.outline = '3px solid #F2BE24'
  }

  const combinedStyles = {
    ...defaultFlexStyle,
    ...settings,
    ...style,
    ...mappedStyle,
  }

  const classes = className || null

  return (
    <div
      {...props}
      className={classes}
      style={combinedStyles}>
      {props.children}
    </div>
  )
}

Flex.defaultProps = defaultProps
Flex.propTypes = propTypes
Flex.displayName = 'Flex'

export default Flex
