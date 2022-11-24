import { useEffect, useState } from "react";
import { DataTableComponent } from "./dataTable/data-table"

const intialHeaderValues = {
  header: '--> Result can be placed here <--',
  subHeading: 'Data can be loaded here!!',
  brandName: 'Your brand name can come here!',
  oldCode: 10,
  newCode: 20
}
const apiData = [
  {
    date: '2022-11-23',
    value: '12'
  },
  {
    date: '2022-11-24',
    value: '13'
  }
]
export const Home = () => {
  const [homeData, setHomeData] = useState([]);
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

  const fetchData = async () => {
    return fetch("https://jsonplaceholder.typicode.com/user")
      .then((response) => response.json())
      .then((data) => setHomeData(apiData));
  }

  useEffect(() => {
    fetchData();
  }, [])
  const getHtml = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <tr key={index} style={{ textAlignLast: 'center' }}>
            <td style={{ width: '30%' }}>
              {item.date}
            </td>
            <td style={{ width: '30%' }}>
              {item.value}
            </td>
          </tr>
        )
      })
    } else {
      return ''
    }
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
        html={getHtml(homeData)}
      // count={homeData.length}
      // pageCount={pageCount}
      // navigate={this.props.navigate} 
      // loader={this.props.loader} 
      // data={homeData}
      // handleClick={handleClick}
      // parentCheck={this.props.parentCheck}
      // isSelect={this.props.isSelect}
      // onParentSelect={this.props.onParentSelect}
      // parentCheckBoxId={this.props.parentCheckBoxId}
      />
    </>

  )
}