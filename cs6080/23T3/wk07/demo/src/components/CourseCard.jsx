const CourseCard = ({ course }) => {
  return (
    <li className="mt-1 truncate text-xs leading-5 text-gray-500">{course.courseCode}, {course.title}</li>
  )
}

export default CourseCard;