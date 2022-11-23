const intialValues = {
  header: '--> Result can be placed here <--',
  subHeading: 'Data can be loaded here!!',
  brandName: 'Your brand name can come here!',
  oldCode: 10,
  newCode: 20
}
export const Home = () => {
  const getHeaderHtml = (data) => {
    return (
      <div className="text-center" style={{ backgroundColor: 'aliceblue' }}>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h2>{data.header}</h2>
          <p><span className="multicolor">{data.brandName}</span></p>
          <p>
            <span className="">
              <span className="mx-2"> Old : <span style={{ "color": "#c71557" }}>{data.oldCode}</span> </span>
              <span className="mx-2"> New : <span style={{ "color": "#c71557" }}> {data.newCode}</span></span>
              <span className="mx-2"> <img src='new.gif' alt={data.brandName} style={{ width: "50px", height: "45px" }} /> </span>
            </span>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="">
      <>{getHeaderHtml(intialValues)}</>
    </div>
  )
}



{/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Welcome {data.name}</h1>
                <h4 className='mb-3'>{data.subHeading}</h4>
                <a
                  className='btn btn-outline-light btn-lg' href='#!' role='button'
                >Call to action---3
                </a
                            >
              </div>
            </div>
          </div> */}