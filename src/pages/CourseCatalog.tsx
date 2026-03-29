import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'

export default function CourseCatalog() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-2">蛤学院 / 全部课程</p>
          <h1 className="text-3xl font-bold mb-3">课程目录</h1>
          <p className="text-gray-300 text-base max-w-2xl">
            蛤学纳米学位项目共八门课程，从入门到毕业级循序渐进，构成完整的蛤学知识体系。
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">共 {courses.length} 门课程</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
