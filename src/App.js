import Footer from './components/Footer';
import HabitDisplay from './components/HabitDisplay';
import MotivationComp from './components/MotivationComp';
import Navbar from './components/Navbar';
import OverView from './components/OverView';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 md:col-span-12">
            <OverView />
          </div>
          <div className="col-span-8 md:col-span-12">
            <HabitDisplay />
          </div>
        </div>
        <MotivationComp />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
