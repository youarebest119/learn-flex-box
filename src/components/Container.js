import React from 'react'
import { useSelector } from 'react-redux';

const Container = ({ children }) => {

  const { container } = useSelector(state => state.settings);
  return (
    <div style={{
      width: `${container?.width}px`,
      display: container?.display,
      alignItems: container?.alignItems,
      justifyContent: container?.justifyContent,
      height: container.height <= 0 ? 'auto' : `${container?.height}px`,
      flexWrap: container?.flexWrap,
      alignContent: container.alignContent,
      flexDirection: container.flexDirection,
      overflow: container.overflow,
    }} className='_container' >
      {children}
    </div >
  )
}

export default Container
