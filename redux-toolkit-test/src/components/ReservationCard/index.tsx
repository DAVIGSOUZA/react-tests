import { useDispatch } from "react-redux"
import { addCustomer, Customer } from "../../features/customerSlice"
import { removeReservation } from "../../features/reservationSlice"

type Props = {
  name: string
  index: number
}

export default function ReservationCard({name, index}:Props) {
  const dispatch = useDispatch()

  const handleOpenTab = () => {
    const customer:Customer = {
      id: `${Date.now}-${name}-${index}`,
      name,
      orders: []
    }
    dispatch(addCustomer(customer))
    dispatch(removeReservation(index))
  }

  return (
    <li key={`${Date.now}-${name}-${index}`}>
      {name} 
      <button onClick={handleOpenTab}> Open tab </button>
      <button onClick={() => dispatch(removeReservation(index))}> X </button>
    </li>
  )
}
