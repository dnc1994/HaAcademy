import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

export default function InstructorProfile() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
            江
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">江泽民 教授</h1>
            <p className="text-gray-300 text-base mb-4">
              蛤学院创始人 / 政治传播学、手风琴演奏学及网络亚文化研究首席教授
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-2xl font-bold">8</span>
                <span className="text-gray-400 ml-1">门课程</span>
              </div>
              <div>
                <span className="text-2xl font-bold">847,293</span>
                <span className="text-gray-400 ml-1">名学员</span>
              </div>
              <div>
                <span className="text-2xl font-bold">4.9</span>
                <span className="text-gray-400 ml-1">星评分</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-5">学术简介</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              江泽民教授是当代蛤学研究领域的奠基人与最高权威。其学术生涯横跨政治传播学、表演艺术学与互联网文化研究三大领域，迄今发表学术论文逾百篇，专著《论政治人物的网络符号生命》已成为蛤学研究的经典文献。江教授尤以其独创的"三维蛤学分析框架"著称，该框架将语言学、符号学与民族志方法融为一体，为后续研究者提供了系统性的方法论工具。
            </p>
            <p>
              在音乐学术领域，江教授是手风琴演奏艺术的杰出实践者与理论研究者。其专著《苏联遗产与当代中国手风琴演奏学》深入考察了手风琴作为跨文化外交媒介的历史功能，并从表演研究的视角建构了"领导人文艺实践"这一分析框架。江教授同时精通民歌演唱，尤善将民歌表演转化为政治传播的有效工具，相关研究成果已被多所高校政治传播系列课程采纳。
            </p>
            <p>
              在田野调查方法论方面，江教授是互联网民族志应用于政治亚文化研究的先驱者之一。其创立的"审查压力下的田野数据采集与保存规范"已被国际数字人文学会收录为推荐实践标准，并在全球范围内的网络文化研究社群中得到广泛应用。江教授特别强调在数字田野中保持研究者的反思性立场，以确保学术发现的真实性与有效性。
            </p>
            <p>
              蛤学院由江泽民教授于2018年亲手创立，旨在为全球膜蛤文化研究者提供系统性的学术训练平台。建院以来，蛤学院已培养来自全球三十余个国家和地区的蛤学研究者逾八十四万名，并颁发纳米学位证书数千份。在江教授的领导下，蛤学院持续扩大课程规模，致力于推动膜蛤文化研究的学科化、国际化进程。
            </p>
          </div>

          {/* Research areas */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">研究领域</h2>
          <div className="flex flex-wrap gap-2">
            {[
              '政治传播学', '修辞学', '符号学', '互联网民族志',
              '手风琴演奏艺术学', '数字记忆研究', '网络亚文化研究', '批评话语分析',
            ].map((area) => (
              <span
                key={area}
                className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Course list sidebar */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">开设课程</h2>
          <div className="space-y-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="block border border-gray-200 rounded-lg p-3 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${course.gradient} flex-shrink-0`} />
                  <span className="text-xs font-semibold text-gray-500">{course.code}</span>
                </div>
                <p className="text-sm font-medium text-gray-900 leading-tight">{course.title}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-gray-500">{course.level}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-500">{course.durationWeeks} 周</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
