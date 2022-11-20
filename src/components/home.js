export const Home = (props) => {
  const getHtml = (data) => {
    return (
      <>
        <div
          className='p-5 text-center bg-image'
          style={{
            ' backgroundImage:': "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
            height: '400px'
          }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
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
          </div>
        </div>
      </>

    )
  }
  return (
    <>{getHtml({ name: 'User-1', subHeading: 'Data can be loaded here!!' })}</>
  )
}
