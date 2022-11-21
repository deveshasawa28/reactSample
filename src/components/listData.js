
import { DataTableComponent } from './dataTable/data-table'
import DatePicker from "react-datepicker"; //import reat-datepicker module
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker module css 
import { format } from 'date-fns'
import { createRef, forwardRef, useState } from 'react';
const apiData = [

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
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-11-25',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '2022-12-25',
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
export const ListData = (props) => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [schemadata, setSchemadata] = useState(apiData);
  const cities = []
  const headerData = [
    { title: 'date', fieldName: 'date', sorting: true }
  ]
  if (schemadata && schemadata.length) {
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
            <td style={{ textAlign: 'center' }}>
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
  const DatePickerCustomInput = forwardRef(
    ({ onClick }, ref) => (<div className="calendar_icon fa fa-arrow-down" onClick={onClick}> </div>)
  );
  const ref = createRef(); // we need to add a Dom ref to the new Component to avoid Dom reffrence Error
  const handleDateChange = (e) => {
    let filterData = apiData.filter(x => new Date(x.date).setHours(0, 0, 0, 0) === +e)
    setSchemadata(filterData)
    setSelectedDate(e)
  }
  const pageCount = Math.ceil(schemadata.length / 10)
  return (
    <>
      <div className='row height d-flex justify-content-center align-items-center mb-2'>
        <div className='col-md-6'>
          <div className='searchBar'>
            <div className="datepicker" style={{
              display: "inline-block",
              marginLeft: "6px",
              fontSize: "1em",
              color: "#32e0c4",
              cursor: "pointer"
            }} >
              <DatePicker
               closeOnScroll={true}
                className='form-control border'
                maxDate={new Date()}
                selected={selectedDate}
                onChange={handleDateChange}
                // isClearable
                // customInput={<DatePickerCustomInput ref={ref} />}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <i class="fa fa-refresh blackiconcolor" aria-hidden="true" onClick={() => {
              setSchemadata(apiData)
              setSelectedDate(null)
            }}></i>
            {/* <span className="left-pan"><i className="fa fa-microphone"></i></span> */}
          </div>
        </div>
      </div>
      <div>
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
