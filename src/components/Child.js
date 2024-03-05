import React from 'react'

const Child = ({ width, overflow, display, flexShrink, flexBasis, flexGrow, height }) => {
    return (
        <div
            className='child'
            style={
                {
                    width,
                    display,
                    height,
                    overflow,
                    flex: `${flexGrow} ${flexShrink} ${flexBasis ? `${flexBasis}px` : "auto"}`
                }}>
            <div className="childProperties position-absolute top-0 start-0 px-2 py-2">
                <p>width: {width}</p>
                <p>height: {height}</p>
                <p>display: {display}</p>
                <p>flex: {`${flexGrow} ${flexShrink} ${flexBasis ? `${flexBasis}px` : "auto"}`}</p>
                <p>overflow {overflow}</p>
            </div>
        </div>
    )
}

export default Child
