// layout.html.jsx
export default (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link href="css/toonnelissen.css" rel="stylesheet"/>
      </head>

      <body>
        
        <div className='gridContainer'>
          <div className='gridSideHeader'>
            <header>
              <h1 >Toon Nelissen</h1> 
              <p >A polymath and explorer</p> 
              <figure>
                <img alt="Success Kid"  src="assets/Toon2.png"/> 
                <figcaption >© 2020</figcaption>
              </figure>
            </header>
          </div>
          <div className='gridTopNav'></div>
          <div className="main">
          {props.children}
          </div>
        </div>
      </body>
    </html>
  )
}