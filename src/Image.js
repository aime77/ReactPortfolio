import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageChange = ({src,as,size,href}) => (
  <Image
    src={src}
    as={as}
    size={size}
    href={href}
    target="_blank"
  />
)

export default ImageChange