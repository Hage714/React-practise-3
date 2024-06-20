import React, { useState } from 'react'

    const FilterCourses = ({courses}) => {
        
        const [selectedCourseID, setSelectedCourseID] = useState(null);

        const theFilteredCourses = courses.filter((course) => {
            if (selectedCourseID === null) {
                return true;
            }
            return course.id === selectedCourseID;
        });

        
        
  return (
    <div>
          

          <select value={selectedCourseID} onChange={(e) => setSelectedCourseID(e.target.value)}>
              <option value={null}>Filter Courses</option>
              {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                      {course.name}
                  </option>
              ))}
          </select>

            <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Course Name</th>
                  </tr>
              </thead>
              <tbody>
                  {theFilteredCourses.map((course) => (
                      <tr key={course.id}>
                          <td>{course.id}</td>
                          <td>{course.name}</td>
                      </tr>
                  ))}
              </tbody>
          </table>

    </div>
  )
}

export default FilterCourses
