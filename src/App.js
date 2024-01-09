import { lazy, Suspense } from 'react';
import SideBarShimmer from './Components/ShimmerUI/SideBarShimmer';
import PaymentPageShimmer from './Components/ShimmerUI/PaymentPageShimmer';

const SideBar=lazy(()=> import('./Components/SideBar'));
const PaymentPage=lazy(()=>import("./Components/PaymentPage"));

function App() {
  return (
    <div className='flex flex-row'>
      <div>
      <Suspense fallback={<SideBarShimmer/>}>
          <SideBar />
        </Suspense>
      </div>
      <div className='flex-grow'>
      <Suspense fallback={<PaymentPageShimmer/>}>
          <PaymentPage />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
