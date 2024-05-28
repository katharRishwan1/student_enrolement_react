// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import CourseCrud from './courseCrud/courseCrud'
// import LoginPage from './loginPage'
// import StudentMain from './studentCourse/studentMain'

// function MainIndex() {

//     const token = localStorage.getItem('token')
//     return (
//         <div className='mainIndex'>
//             <BrowserRouter>
//                 <Routes>
//                     {token ? (
//                         <>
//                             <Route path="/student" element={<StudentMain />} />
//                             <Route path="/course" element={<CourseCrud />} />
//                         </>
//                     ) : (
//                         <Route path="/" element={<LoginPage />} />
//                     )}




//                 </Routes>
//                 {token && (
//                     <div className='d-flex'>
//                         <nav className='d-flex'>
//                             <ul>
//                                 <li>
//                                     <Link to="/student">Student Crud</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/course">Course Crud</Link>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 )}
//             </BrowserRouter>

//         </div>
//     )
// }

// export default MainIndex


import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CourseCrud from './courseCrud/courseCrud';
import LoginPage from './loginPage';
import StudentMain from './studentCourse/studentMain';
import "bootstrap/dist/css/bootstrap.min.css";
import CourseCreatePage from './courseCrud/courseCreatepage';
import StudentCreatePage from './studentCourse/studentCreatePage';

function MainIndex() {
    const token = localStorage.getItem('token');
    return (
        <div className="mainIndex">
            <BrowserRouter>
                <div>
                    {token && (
                        <nav className="d-flex">
                            <ul>
                                <li>
                                    <Link to="/student">Student Crud</Link>
                                </li>
                                <li>
                                    <Link to="/course">Course Crud</Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
                <Routes>
                    {token ? (
                        <>
                            <Route path="/student" element={<StudentMain />} />
                            <Route path="/course" element={<CourseCrud />} />
                            <Route path="/courseCreatePage" element={<CourseCreatePage />} />
                            <Route path="/studentCreatePage" element={<StudentCreatePage />} />
                            <Route path="*" element={<StudentMain />} /> {/* Default to StudentMain if path is unknown */}
                        </>
                    ) : (
                        <Route path="/" element={<LoginPage />} />
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainIndex;
