import { createContext, useState,useEffect } from 'react'
import getName from '../api/api'
export const SortContext = createContext(null)

export const SortContextProvider = (props) => {
  const [items, setItems] = useState([])
  const retrievItems = async () => {
    const response = await getName('/products')
    return response.data
  }
  useEffect(() => {
    retrievItems()
  })
  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrievItems()
      if (allItems) setItems(allItems)
    }
    getAllItems()
  }, [])
  const ascendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name))
      setItems(result)
    }
    console.log('from A - Z ')
  }
  const descendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name))
      setItems(result)
    }
    console.log(`from Z - A`)
  }
  const sortByHighPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (a.price > b.price ? 1 : -1))
      setItems(result)
    }
    console.log('High price')
  }
  const sortByLowPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (b.price > a.price ? 1 : -1))
      setItems(result)
    }
    console.log('low price')
  }
  //  sort item by id or name
  // const sortId = () => {
  //   let sortedItem = items.sort((a, b) => (a.price > b.price ? 1 : -1))
  //   setSorted(sortedItem)
  //   console.log(sortedItem)
  // }
  // ----------------------------------------------------//
  // sort by name
  // const sortByName = items.sort((a, b) => {
  //   if (a.name < b.name) return -1
  //   return 1
  // //in descending we can have return 1 then return -1
  // })
  // console.log(sortByName)
  // ----------------------------------------------------//
  // sort by gender
  // const byGender = example.sort((a,b)=>{
  //   if(a.gender==='female')return -1
  //   return 1
  // })
  const sortcontextValue = {
    ascendingEvent,
    descendingEvent,
    sortByHighPrice,
    sortByLowPrice,
  }

  return (
    <SortContext.Provider value={sortcontextValue}>
      {props.children}
    </SortContext.Provider>
  )
}
