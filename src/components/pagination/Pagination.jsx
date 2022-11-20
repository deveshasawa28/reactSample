import { Component } from 'react'
import Pagination from 'react-js-pagination'
import './Pagination.css'

export default class PaginationContainer extends Component {
  render () {
    const paginationElement = (
      <Pagination
        firstPageText='<<'
        lastPageText='>>'
        prevPageText='<'
        nextPageText='>'
        breakLabel='...'
        linkClass='page-link'
        innerClass='pagination'
        itemClass='page-item'
        linkClassFirst='direction-button'
        linkClassPrev='direction-button'
        linkClassNext='direction-button'
        linkClassLast='direction-button'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClass='active'
        disabledClass='item-disabled'
        activePage={this.props.activePage}
        itemsCountPerPage={9}
        totalItemsCount={this.props.count}
        pageRangeDisplayed={5}
        onChange={this.props.handleClick}
      />
    )
    return paginationElement
  }
}
