import React, { useEffect, useState } from 'react'



const changeTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false)
       
    document.body.style.backgroundColor = darkTheme ? 'black' : 'rgb(255, 255, 255)'
    
  return (
    <button onClick={() => 
        {
            console.log('clicked')
            setDarkTheme(!darkTheme)   
        }
    }>changeTheme</button>
  )
}

export default changeTheme
   
