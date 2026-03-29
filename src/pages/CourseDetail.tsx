import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'

type Tab = '课程大纲' | '作业' | '讲师' | '学员评价'

const TABS: Tab[] = ['课程大纲', '作业', '讲师', '学员评价']

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>()
  const course = courses.find((c) => c.id === id)
  const [activeTab, setActiveTab] = useState<Tab>('课程大纲')

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">课程未找到</h2>
          <Link to="/courses" className="text-primary hover:underline">
            返回课程目录
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Course Header */}
      <div className={`bg-gradient-to-br ${course.gradient} text-white py-12 px-4`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link to="/courses" className="hover:text-white transition-colors">课程目录</Link>
            <span>/</span>
            <span>{course.code}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded">
              {course.code}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{course.title}</h1>
          <p className="text-white/80 text-lg mb-5">{course.subtitle}</p>
          <p className="text-white/90 text-sm leading-relaxed max-w-3xl mb-6">{course.abstract}</p>

          <div className="flex flex-wrap items-center gap-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white`}>
              {course.level}
            </span>
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
              {course.durationWeeks} 周
            </span>
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
              {course.enrollment.toLocaleString('zh-CN')} 名学员
            </span>
            <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full flex items-center gap-1">
              ★ {course.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sticky top-16 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <span className="text-sm text-gray-600 hidden sm:block font-medium">{course.title} — {course.subtitle}</span>
          <button className="bg-primary text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm ml-auto">
            立即报名
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="max-w-5xl mx-auto flex gap-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {activeTab === '课程大纲' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">课程大纲</h2>
            <div className="space-y-4">
              {course.weeks.map((week, i) => (
                <details
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden group"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-900 text-sm">{week.title}</span>
                    <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 py-4 bg-white">
                    <ul className="space-y-2 mb-4">
                      {week.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 rounded px-3 py-2">
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">必读文献</span>
                      <p className="text-xs text-blue-800 mt-1 leading-relaxed">{week.reading}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {activeTab === '作业' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">课程作业</h2>
            <div className="space-y-5">
              {course.assignments.map((asgn, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-gray-900">{asgn.title}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0">
                      第 {asgn.dueWeek} 周截止
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{asgn.prompt}</p>
                  <span className="text-xs text-gray-500">字数要求：不少于 {asgn.wordCount.toLocaleString('zh-CN')} 字</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === '讲师' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">课程讲师</h2>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                江
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <Link to="/instructor/jiang" className="text-primary hover:underline">
                    江泽民 教授
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  蛤学院创始人 / 政治传播学、手风琴演奏学及网络亚文化研究首席教授
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  江泽民教授是当代蛤学研究领域的奠基人与最高权威，其独创的"三维蛤学分析框架"为全球蛤学研究者提供了系统性的方法论工具。
                </p>
                <Link
                  to="/instructor/jiang"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  查看完整讲师主页 →
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === '学员评价' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">学员评价</h2>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-5xl font-bold text-gray-900">{course.rating.toFixed(1)}</span>
              <div>
                <Stars rating={Math.round(course.rating)} />
                <p className="text-xs text-gray-500 mt-1">课程评分</p>
              </div>
            </div>
            <div className="space-y-5">
              {course.reviews.map((review, i) => (
                <div key={i} className="border-b border-gray-100 pb-5 last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Stars rating={review.rating} />
                    <span className="text-xs text-gray-500">{review.author}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
