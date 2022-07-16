import React from 'react'
import { LayoutProps } from '../../models/layout'

const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
      <div>admin1</div>
      {children}
    </div>
    
    
  )
}

export default LayoutAdmin