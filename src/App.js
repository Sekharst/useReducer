
import './App.css';
import { UserDashboard } from './UserDashboard/UserDashboard';
import Welcome from './Welcome';
import UseReducer from './UseReducer';

function App() {
  return (
    <div className="App">
     <UserDashboard/>
      <Welcome/>
      <UseReducer/>
    </div>
  );
}

export default App;
