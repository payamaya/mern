import { Outlet, useSearchParams } from 'react-router-dom'
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h2>User1</h2>
      <h2>User3</h2>
      {/* Outlet component must be invoke at the end */}
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <Outlet />
      {showActiveUsers ? <h2>Showing active users</h2>: <h2>Showing all users</h2>}
    </div>
  )
}
export default Users

// useSearchParams hook behaves smiliar to the useState()
// instead of storing state in memory though it is stored in the URL
// turns two values the first one called object and the second one called function
// searchParams is pretty common when you have to apply filters in a listing page. in website selecting a filter will update the url with a searchParam, this lets you share links with others or even bookmark the link

// you get access to the setSearchParams function to set the value
// searchParams object to get any value present in the URL