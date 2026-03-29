import { Link } from 'react-router-dom'

function CertificateSVG() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full max-w-lg mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect x="8" y="8" width="464" height="324" rx="6" fill="white" stroke="#0056D2" strokeWidth="2" />
      {/* Inner decorative border */}
      <rect x="18" y="18" width="444" height="304" rx="4" fill="white" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="4 3" />

      {/* Header band */}
      <rect x="8" y="8" width="464" height="60" rx="6" fill="#0056D2" />
      <rect x="8" y="50" width="464" height="18" fill="#0056D2" />

      {/* Academy name */}
      <text x="240" y="38" textAnchor="middle" fill="white" fontFamily="serif" fontSize="18" fontWeight="bold">蛤学院 HA Academy</text>
      <text x="240" y="55" textAnchor="middle" fill="#bfdbfe" fontFamily="sans-serif" fontSize="9" letterSpacing="2">NANO DEGREE PROGRAMME</text>

      {/* Decorative corner ornaments */}
      <circle cx="46" cy="105" r="16" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="46" y="110" textAnchor="middle" fill="#0056D2" fontFamily="serif" fontSize="16">蛤</text>
      <circle cx="434" cy="105" r="16" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="434" y="110" textAnchor="middle" fill="#0056D2" fontFamily="serif" fontSize="16">蛤</text>

      {/* Certificate title */}
      <text x="240" y="105" textAnchor="middle" fill="#374151" fontFamily="sans-serif" fontSize="11" letterSpacing="3" fontWeight="600">证书 CERTIFICATE OF COMPLETION</text>

      {/* Main certificate text */}
      <text x="240" y="145" textAnchor="middle" fill="#6b7280" fontFamily="sans-serif" fontSize="10">兹证明</text>
      <line x1="100" y1="165" x2="380" y2="165" stroke="#d1d5db" strokeWidth="1" />
      <text x="240" y="160" textAnchor="middle" fill="#9ca3af" fontFamily="sans-serif" fontSize="8">（姓名）</text>

      <text x="240" y="185" textAnchor="middle" fill="#6b7280" fontFamily="sans-serif" fontSize="10">已圆满完成蛤学院全部八门课程并通过毕业论文答辩</text>
      <text x="240" y="202" textAnchor="middle" fill="#6b7280" fontFamily="sans-serif" fontSize="10">特授予</text>

      {/* Degree name */}
      <text x="240" y="230" textAnchor="middle" fill="#0056D2" fontFamily="serif" fontSize="22" fontWeight="bold">蛤学纳米学位</text>
      <text x="240" y="248" textAnchor="middle" fill="#0056D2" fontFamily="sans-serif" fontSize="9" letterSpacing="1">NANO DEGREE IN MEMBRANE TOAD STUDIES</text>

      {/* Signature line */}
      <line x1="140" y1="288" x2="220" y2="288" stroke="#9ca3af" strokeWidth="1" />
      <line x1="260" y1="288" x2="340" y2="288" stroke="#9ca3af" strokeWidth="1" />
      <text x="180" y="300" textAnchor="middle" fill="#9ca3af" fontFamily="sans-serif" fontSize="7">江泽民 教授</text>
      <text x="300" y="300" textAnchor="middle" fill="#9ca3af" fontFamily="sans-serif" fontSize="7">颁发日期</text>

      {/* Seal */}
      <circle cx="240" cy="272" r="20" fill="#eff6ff" stroke="#0056D2" strokeWidth="1.5" />
      <text x="240" y="277" textAnchor="middle" fill="#0056D2" fontFamily="serif" fontSize="18" fontWeight="bold">蛤</text>
    </svg>
  )
}

const careerPaths = [
  '高校蛤学讲师资格',
  '蛤学研究员资格',
  '膜蛤文化顾问认证',
  '互联网亚文化独立研究员资格',
]

export default function Certificate() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-primary text-white py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">蛤学纳米学位证书</h1>
        <p className="text-blue-100 text-base max-w-xl mx-auto">
          完成全部八门课程及毕业论文答辩后，蛤学院将颁发全球唯一经认证的蛤学纳米学位证书
        </p>
      </div>

      {/* Certificate illustration */}
      <div className="bg-gray-50 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <CertificateSVG />
        </div>
      </div>

      {/* Description + Career paths */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">证书说明</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            蛤学纳米学位证书是蛤学院对学员完成完整蛤学知识体系学习的正式学术认证。完成HA-101至HA-401全部八门课程，并通过由江泽民教授亲自主持的毕业论文答辩委员会审核，方可获得此证书。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            该证书采用防伪数字水印技术，每份证书均附有唯一的蛤学院认证编号，可在蛤学院官方数据库中进行学术验证。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            颁发典礼由江泽民教授亲自主持，每届毕业生均可获邀参加庄重肃穆的纳米学位授予仪式。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">持证资格</h2>
          <p className="text-sm text-gray-600 mb-4">获得蛤学纳米学位证书后，持证者将正式具备以下学术资格：</p>
          <ul className="space-y-3">
            {careerPaths.map((path) => (
              <li key={path} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700">{path}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-14 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">准备好开启蛤学之旅了吗？</h2>
        <p className="text-gray-600 text-sm mb-7 max-w-md mx-auto">
          从HA-101入门，循序渐进，最终获得全球唯一的蛤学纳米学位
        </p>
        <Link
          to="/courses"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          开始我的蛤学之旅
        </Link>
      </div>
    </div>
  )
}
