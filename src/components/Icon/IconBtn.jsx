import React from 'react'

const IconBtn = (props) => {

    const { src: Svg, size, fill, ...extra } = props

    return (
        <Svg width={size} height={size} fill={fill} {...extra} />
    )
}

export default IconBtn
