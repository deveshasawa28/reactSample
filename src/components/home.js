import { DataTableComponent } from "./dataTable/data-table"

const intialHeaderValues = {
  header: '--> Result can be placed here <--',
  subHeading: 'Data can be loaded here!!',
  brandName: 'Your brand name can come here!',
  oldCode: 10,
  newCode: 20
}
export const Home = () => {
  const getHeaderHtml = (data) => {
    return (
      <div className="text-center py-2 mb-2" style={{ backgroundColor: 'aliceblue' }}>
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
    <>
    {getHeaderHtml(intialHeaderValues)}
    <DataTableComponent
        loader={false}
        headerData={[
          { title: 'Date', fieldName: 'date' },
          { title: 'results', fieldName: 'result' }
        ]}
        // html={getHtml(schemadata)}
        // count={schemadata.length}
        // pageCount={pageCount}
        // navigate={this.props.navigate} 
        // loader={this.props.loader} 
        // data={schemadata}
        // handleClick={handleClick}
      // parentCheck={this.props.parentCheck}
      // isSelect={this.props.isSelect}
      // onParentSelect={this.props.onParentSelect}
      // parentCheckBoxId={this.props.parentCheckBoxId}
      />


    </>

  )
}