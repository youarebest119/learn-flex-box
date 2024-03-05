import React from 'react'
import { useSelector } from 'react-redux'
import Child from './Child';
import Container from './Container'

const Main = () => {

    const { childrens } = useSelector(state => state.settings);

    return (
        <>
            <Container>
                {
                    childrens.map((child, index) => {
                        return (
                            <Child
                                width={child.width ? `${child.width}px` : 'auto'}
                                height={child.height ? `${child.height}px` : "auto"}
                                display={child.display}
                                overflow={child.overflow}
                                flexBasis={child.flexBasis}
                                flexShrink={child.flexShrink}
                                flexGrow={child.flexGrow}
                                key={index}
                            />
                        )
                    }
                    )
                }
            </Container>
        </>
    )
}

export default Main
