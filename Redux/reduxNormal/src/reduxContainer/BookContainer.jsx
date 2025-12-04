import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseBook } from './BookAction'


function BookContainer() {

  const noOfBoooks = useSelector(state => state.noOfBoooks)
  const dispatch = useDispatch()

  console.log('noOfBoooks', noOfBoooks)
  
  return (
    <>
    <div>BookContainer</div>
    <h1>No of books - {noOfBoooks} </h1> 
    <button onClick={() => dispatch(purchaseBook())}>Buy Book</button>
    </>
  ) 
}

export default BookContainer
