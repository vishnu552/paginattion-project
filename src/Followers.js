import React from 'react'

function Followers({avatar_url,html_url,login}) {
  return (
    <div className='content'>
    <img src={avatar_url} alt={login} />
    <h4>{login}</h4>
    <a href={html_url}>Profile</a>
    </div>
  )
}

export default Followers