import React from 'react'

interface Props {
    
}


export async function getStaticPaths() {
    return {
      paths: [
        { params: { ... } } // See the "paths" section below
      ],
      fallback: true or false // See the "fallback" section below
    };
  }
  

const [slug] = (props: Props) => {
    return (
        <div>
            
        </div>
    )
}

export default [slug]
