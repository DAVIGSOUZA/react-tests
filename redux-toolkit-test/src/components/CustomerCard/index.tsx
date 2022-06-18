import { useState } from "react"
import { useDispatch } from "react-redux"
import { addOrder, Customer } from "../../features/customerSlice"

type Props = {
  customer: Customer
}

export default function ReservationCard({customer}:Props) {
  const [orderToAddInput, setOrderToAddInput] = useState('')
  const dispatch = useDispatch()
  const { id, name, orders} = customer

  const handleAddOrder = () => {
    if (!orderToAddInput) return
    dispatch(addOrder({
      id, 
      order: orderToAddInput
    }))
    setOrderToAddInput('')
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Orders</p>
      <ul>
        {orders.map(order => {
          return <li>{order}</li>
        })}
      </ul>
      <input 
        value={orderToAddInput} 
        onChange={(e) => setOrderToAddInput(e.target.value)}
      />
      <button onClick={handleAddOrder}>
        Add Order
      </button>
    </div>
  )
}
