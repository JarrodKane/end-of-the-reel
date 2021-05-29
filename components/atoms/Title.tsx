 import React from 'react'
 
 interface Props {
     title: string
 }
 
 const Title: React.FC<Props> = ({title})=> {
    return (
        <div>
            {title}
        </div>
    )
}
 
 export default Title
 


