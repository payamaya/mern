import { useParams } from 'react-router-dom'
const UserDetails = () => {
  
  // const params = useParams()
  // params.userID corresponds to the dynamic segment :userID we Specified in the route config app.js
  // const userId = params.userId
  // we can also destrutured like the line below
  const { userId } = useParams()
  return <div>UserDetails about users {userId}</div>
}
export default UserDetails

// import useParams hook and invoke it and access the property on the returned
// you can extract user id and do something with that id, perhaps make an api call to fetch the details about the user