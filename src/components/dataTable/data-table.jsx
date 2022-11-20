import { Component } from 'react'
import PaginationContainer from '../pagination/Pagination'
import './dataTable.css'
export class DataTableComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageInfo: 1,
      show: false
    }
  }

  handleClick = (pageNumber) => {
    const pageOffset = (pageNumber - 1) * this.props.filter.itemPerPage
    this.props.handleClick({
      ...this.props.filter,
      pageOffset
    })
    this.setState({ pageInfo: pageNumber })
  }

  searchText = (event) => {
    this.props.handleClick({
      ...this.props.filter,
      pageOffset: 0,
      search: event.target.value
    })
  }

  sortValue = (sortBy) => {
    this.props.handleClick({
      ...this.props.filter,
      sortBy,
      pageOffset: 0,
      orderBy: this.props.filter.orderBy === 'ASC' ? 'DESC' : 'ASC'
    })
  }

  render () {
    return (
      <div>
        {this.props.search
          ? 
          (
            <div className='row height d-flex justify-content-center align-items-center mb-2'>
              <div className='col-md-6'>
                <div className='searchBar'>
                  <i className='fa fa-search' />
                  <input
                    onKeyUp={(e) => this.searchText(e)}
                    type='text'
                    className='form-control border'
                    placeholder='Search'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                  />
                  {/* <span className="left-pan"><i className="fa fa-microphone"></i></span> */}
                </div>
              </div>
            </div>
            ) : (
              <div style={{ display: 'none' }} />
            )}

        <div className='bg-white shadow usrelist table-responsive'>
          <table className='table table-light table-striped table-bordered'>
            <thead className='thead-light'>
              <tr>
                <th style={this.props.isSelect ? {} : { display: 'none' }}>
                  {' '}
                  <input
                    type='checkbox'
                    onChange={(e) => this.props.onParentSelect(e)}
                    id={this.props.parentCheckBoxId}
                    checked={this.props.parentCheck}
                    style={{
                      fontSize: '18px',
                      padding: '0px',
                      verticalAlign: 'middle',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                  />
                </th>
                {this.props.headerData && this.props.headerData.map((item, i) => {
                  return (
                    <th
                      key={i}
                      scope='col'
                      style={
                        item.title === 'status' || item.title === 'actions'
                          ? { textAlign: 'center' }
                          : {}
                      }
                    >
                      {item.title === 'actions'
                        ? ''
                        : item.title !== ''
                          ? item.title.charAt(0).toUpperCase() + item.title.slice(1)
                          : ' '}{' '}
                      {item.sorting
                        ? (
                          <i
                            className='fa fa-fw fa-sort'
                            onClick={() => this.sortValue(item.fieldName)}
                          />
                          )
                        : (
                            ''
                          )}{' '}
                    </th>
                  )
                })}
              </tr>
            </thead>

            <tbody>
              {this.props.loader
                ? (
                  <tr>
                    <td
                      colSpan={this.props.headerData.length}
                      style={{ width: '100%', align: 'center' }}
                    >
                      {/* <LoaderContainer {...loaderProperty}></LoaderContainer> */}
                    </td>
                  </tr>
                  ) : this.props?.data?.length === 0
                    ? (
                      <tr>
                        <td
                          colSpan={this.props.headerData.length}
                          style={{ padding: '15%', width: '100%', fontSize: '20px', align: 'center' }}
                        >
                          No Found.
                        </td>
                      </tr>
                      )
                    : (
                        this.props.html
                      )}
            </tbody>
          </table>
        </div>
        <div className='d-flex flex-row-reverse me-2 mt-4 navigation'>
          {this.props.pageCount > 1
            ? (
              <PaginationContainer
                activePage={this.state.pageInfo}
                count={this.props.count}
                handleClick={this.handleClick}
              />
              )
            : (
                ''
              )}
        </div>
      </div>
    )
  }
}
