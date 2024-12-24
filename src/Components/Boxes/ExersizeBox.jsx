import React from 'react'

const ExersizeBox = ({id, name, iconPath, times, setFunc}) => {
  return (
    <div key={id} className="relative bg-white rounded-xl flex justify-between px-3 py-3">
      <div className="inline-block">
        {name} <br />
        {times} times
      </div>
      <div >
        <input className='ml-3' type="checkbox" onChange={() => {
          setFunc(id)
        }} />
        <img src={`http://localhost:5000${iconPath}`} alt="" />
      </div>
    </div>
  )
}

export default ExersizeBox