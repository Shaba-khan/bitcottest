import React from 'react'
function Header(props)
{
    return(
        <div className="header">
        <div className="container">

          <a href="/" className="logo">DEMO Streaming</a>
          <div className="header-right">
            <a href="#">Log in</a>
            <a className="active" href="#">Start your free trail</a>
          </div>
        </div>
       </div>
    )
}

export default Header