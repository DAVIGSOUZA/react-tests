import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('')
  const reservations = useSelector((state:RootState) => state.reservations.value)
  const customers = useSelector((state:RootState) => state.customer.value)
  const dispatch = useDispatch()

  const handleAddReservation = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className="App">
      <h1>Reservation</h1>
      <ul>
        {reservations.map((name, index) => {
          return <ReservationCard key={`${Date.now()}${name}${index}`} name={name} index={index} />
        })}
      </ul>
      <div>
        <input 
          value={reservationNameInput} 
          onChange={(e) => setReservationNameInput(e.target.value)}
        />
        <button onClick={handleAddReservation}> Add </button>
      </div>
      <hr />
      <h2>Tabs open</h2>
      <div>
        {customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer}/>
        })}
      </div>

    </div>
  );
}

export default App;
