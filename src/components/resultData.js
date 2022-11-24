import { useState, useEffect } from 'react';
import { DataTableComponent } from './dataTable/data-table'
import DatePicker from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css";

const apiData = [
  {
    date: '2022-11-23',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'kota', code: 21 },
      { name: 'ajmer', code: 22 },
      { name: 'kolkata', code: 23 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-11-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'bika', code: 25 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-11-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-11-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 },
      { name: 'rajasthan', code: 20 },
      { name: 'punjab', code: 20 },
      { name: 'delhi', code: 20 },
      { name: 'ja', code: 20 },
      { name: 'aa', code: 20 }]
  },
  {
    date: '2022-11-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-11-23',
    cities: [
      { name: 'raj', code: 100 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-12-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-12-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  }
]
export const ResultData = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [schemadata, setSchemadata] = useState([]);
  const cities = []
  const headerData = [
    { title: 'date', fieldName: 'date' }
  ]

  const fetchData = async() => {
    console.log(process.env.REACT_APP_API_URL)
    return fetch("https://jsonplaceholder.typicode.com/user")
      .then((response) => response.json())
      .then((data) => setSchemadata(apiData));
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (schemadata && schemadata.length) {
    console.log('Schema data', schemadata)
    schemadata.forEach((item, index) => {
      cities.push(...item.cities.filter((item) => cities.indexOf(item.name) < 0).map(x => x.name))
    })
    if (cities && cities.length) {
      cities.forEach(x => headerData.push({ title: x.toUpperCase() }))
    }
  }
  const handleClick = (filter) => {
    setSchemadata(schemadata.reverse())
  }
  const getHtml = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <tr key={index}>
            <td style={{ width: '30%' }} className="fixed-column">
              {item.date}
              {/* {format(new Date(item.date), 'dd/MM/yyyy')} */}
            </td>
            {cities.map((x, index) => (
              item.cities && item.cities.length && item.cities.find(y => x === y.name)
                ? <td key={index} style={{ textAlign: 'center' }}>
                  {item.cities.find(y => x === y.name).code}
                </td>
                : <td key={index} style={{ textAlign: 'center' }}> 0</td>
            ))}
          </tr>
        )
      })
    } else {
      return ''
    }
  }
  const handleDateChange = (e) => {
    let filterData = apiData.filter(x => new Date(x.date).setHours(0, 0, 0, 0) === +e)
    setSchemadata(filterData)
    setSelectedDate(e)
  }
  const pageCount = Math.ceil(schemadata.length / 10)
  const getHeaderHtml = (data) => {
    return (
      <div className="text-center py-2" style={{ backgroundColor: 'aliceblue' }}>
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h2>{data.header}</h2>
          <p><span className="multicolor">{data.brandName}</span></p>
        </div>
      </div>
    )
  }
  const intialHeaderValues = {
    header: '--> Result can be placed here <--',
    brandName: 'Your brand name can come here!',
  }
  return (
    <>
      {getHeaderHtml(intialHeaderValues)}
      <div className='col-12' style={{
        textAlign: '-webkit-center'
      }}>
        <div className="col-4 my-2 mx-5 d-flex justify-content-center align-items-center p-0" style={{
          marginLeft: "6px",
          fontSize: "1em",
          color: "#32e0c4",
          cursor: "pointer",
          backgroundColor: "gainsboro",
          borderRadius: '0.375rem'
        }} >
          <DatePicker
            closeOnScroll={true}
            className='form-control border'
            maxDate={new Date()}
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select date"
            // isClearable
            // customInput={<DatePickerCustomInput ref={ref} />}
            dateFormat="yyyy-MM-dd"
          />
          <div className='px-3' title='clear calender'>
            <i className="fal fa-trash-alt blackiconcolor" aria-hidden="true" onClick={() => {
              setSchemadata(apiData)
              setSelectedDate(null)
            }}></i>
          </div>
        </div>
      </div>
      <DataTableComponent
        search={false}
        filter={{
          search: '',
          sortBy: 'date',
          orderBy: 'ASC',
          pageOffset: 0,
          itemPerPage: 10
        }}
        loader={false}
        headerData={headerData}
        html={getHtml(schemadata)}
        count={schemadata.length}
        pageCount={pageCount}
        // navigate={this.props.navigate} 
        // loader={this.props.loader} 
        data={schemadata}
        handleClick={handleClick}
      // parentCheck={this.props.parentCheck}
      // isSelect={this.props.isSelect}
      // onParentSelect={this.props.onParentSelect}
      // parentCheckBoxId={this.props.parentCheckBoxId}
      />

    </>
  )
}