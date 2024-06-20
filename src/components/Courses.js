import React from 'react'
import data from './students_data'
import FilterCourses from './FilterCourses'


const Courses = () => {
    const data = [ 
        { ID: 1, name: 'JavaScript' },
        { ID: 2, name: 'ReactJs' },
        { ID: 1, name: 'SQL Databases' },
        { ID: 1, name: 'Typescript' }
    ];

  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-2'></div>
              <div className='col-8'>
                <table className="table">
                  <thead>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Course Name</th>
                          <th scope="col">Completed ?</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map(course => {
                          return (
                              <tr key={course.ID}>
                                  <td>{course.ID}</td>
                                  <td>{course.courseName}</td>
                                  <td>{course.completed}</td>
                              </tr>
                          )
                      })}
                  </tbody>
              </table>
              </div>
          
              <div className='col-2'></div>
          </div>
    </div>
  ) 
}

export default Courses
