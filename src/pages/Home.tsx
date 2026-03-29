import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'

const FEATURED_IDS = ['ha-101', 'ha-201', 'ha-302']

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const duration = 2000
    const start = performance.now()

    let rafId: number

    function step(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(eased * target)
      el!.textContent = value.toLocaleString('zh-CN') + suffix
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [target, suffix])

  return <span ref={elRef}>0{suffix}</span>
}

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: '权威认证',
    desc: '蛤学院颁发的纳米学位证书已获得全球蛤学研究界的广泛认可',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: '名师执教',
    desc: '由江泽民教授本人亲自设计课程体系，确保学术严谨性',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: '体系完整',
    desc: '从入门到毕业级，八门课程构成完整的蛤学知识图谱',
  },
]

export default function Home() {
  const featuredCourses = FEATURED_IDS
    .map((id) => courses.find((c) => c.id === id))
    .filter(Boolean) as typeof courses

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            蛤学纳米学位项目
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
            系统学习膜蛤文化，<br className="hidden sm:block" />开启您的蛤学之旅
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            由江泽民教授亲授，全球唯一经认证的蛤学纳米学位项目
          </p>
          <Link
            to="/courses"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors text-base"
          >
            浏览课程
          </Link>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-blue-400 pt-10">
            <div>
              <div className="text-3xl font-bold">
                <AnimatedCounter target={847293} />
              </div>
              <div className="text-blue-200 text-sm mt-1">名学员</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8</div>
              <div className="text-blue-200 text-sm mt-1">门课程</div>
            </div>
            <div>
              <div className="text-3xl font-bold">全球</div>
              <div className="text-blue-200 text-sm mt-1">认证</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">精选课程</h2>
            <Link to="/courses" className="text-primary text-sm font-medium hover:underline">
              查看全部课程 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why HA Academy */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">为什么选择蛤学院</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">立即开始您的蛤学研究</h2>
          <p className="text-gray-400 text-sm mb-7">
            加入全球超过八十四万名蛤学研究者的学术共同体
          </p>
          <Link
            to="/courses"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            浏览课程
          </Link>
        </div>
      </section>
    </>
  )
}
