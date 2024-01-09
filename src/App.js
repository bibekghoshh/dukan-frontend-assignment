import PaymentPage from './Components/PaymentPage';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className='flex flex-row'>
      <div>
        <SideBar/>
      </div>
      <div className='flex-grow'>
        <PaymentPage/>
      </div>
    </div>
  );
}

export default App;
