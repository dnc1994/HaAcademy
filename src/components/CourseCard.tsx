import { Link } from 'react-router-dom'
import type { Course } from '../data/courses'

interface Props {
  course: Course
}

const levelColors: Record<Course['level'], string> = {
  '入门': 'bg-green-100 text-green-800',
  '中级': 'bg-blue-100 text-blue-800',
  '高级': 'bg-orange-100 text-orange-800',
  '毕业级': 'bg-purple-100 text-purple-800',
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${i <= full ? 'text-yellow-400' : hasHalf && i === full + 1 ? 'text-yellow-300' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-600 font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function CourseCard({ course }: Props) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${course.gradient} h-28 flex flex-col items-start justify-end p-4`}>
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">{course.code}</span>
        <h3 className="text-white font-bold text-lg leading-tight mt-0.5">{course.title}</h3>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-2">{course.subtitle}</p>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[course.level]}`}>
            {course.level}
          </span>
          <span className="text-xs text-gray-500">{course.durationWeeks} 周</span>
        </div>

        <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
          <StarRating rating={course.rating} />
          <span className="text-xs text-gray-500">
            {course.enrollment.toLocaleString('zh-CN')} 名学员
          </span>
        </div>
      </div>
    </Link>
  )
}
