
import './App.css';
import Courses from './components/Courses';
import ChangeName from './components/ChangeName';
import FilterCourses from './components/FilterCourses';
function App() {
    
  return (
    <div className="App">
      
      <ChangeName />
      <Courses />
      <FilterCourses />
   </div>
  );
}

export default App;
