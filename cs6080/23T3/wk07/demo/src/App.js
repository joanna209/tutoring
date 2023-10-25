import { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard';

function App() {
  const [courses, setCourses] = useState();
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    fetch("https://unilectives.csesoc.app/api/v1/courses", {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setCourses(data.courses));
  }, [])
  const revealCourses = () => setReveal(!reveal);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        UNSW Course List
      </h1>
      <button onClick={revealCourses}>Open me</button>
      {reveal ? courses.map((course) =>
        <CourseCard course={course} />)
        : null}
    </div>
  );
}

export default App;
