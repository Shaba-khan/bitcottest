import React from 'react';

function SubHeader(props)
{
    return(
        <div className="subheader">
        <div className="container text-left">
          <a href="#" className="subtitle">{props.title}</a>
        </div>
       </div>
    )
}

export default SubHeader