/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const style = { marginLeft: '10px'}
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={style}>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        onClick()
      }}
      disabled={active}
      style={style}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
