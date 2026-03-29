import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">页面未找到</h1>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          您访问的页面不存在。您是否太年轻、太简单，有时候过于幼稚了呢？
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-primary text-white font-semibold px-6 py-2.5 rounded hover:bg-blue-700 transition-colors text-sm"
          >
            返回首页
          </Link>
          <Link
            to="/courses"
            className="border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded hover:border-gray-400 transition-colors text-sm"
          >
            浏览课程
          </Link>
        </div>
      </div>
    </div>
  )
}
