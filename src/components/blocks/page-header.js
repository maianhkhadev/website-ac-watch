import React from 'react'

function Section(props) {

  return (
    <header className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mx-auto">
            <h2 className="page-title">{ props.title }</h2>
            <div className="page-describe">LOREM IPSUM DOLOR SIT AMET</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Section
