
import { DataTableComponent } from './dataTable/data-table'
const schemadata = [
  {
    date: '20-12-2022',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '20-11-2022',
    cities: [
      { name: 'raj', code: 100 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '20-11-2022',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  },
  {
    date: '20-11-2022',
    cities: [
      { name: 'Jaipur', code: 10 },
      { name: 'Jodhpur', code: 20 }]
  }
]
export const ListData = (props) => {
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
  return (
    <DataTableComponent
      count={schemadata.length}
            //   pageCount={pageCount}
      search
            //   navigate={props?.navigate}
      filter={{
        search: '',
        sortBy: 'date',
        orderBy: 'ASC',
        pageOffset: 0,
        itemPerPage: 10
      }}
      loader={false}
      headerData={headerData}
      data={getHtml(schemadata)}
      html={getHtml(schemadata)}
    />
  )
}
