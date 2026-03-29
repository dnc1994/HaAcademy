import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">
                蛤
              </div>
              <span className="text-white font-semibold text-sm">HA Academy | 蛤学院</span>
            </div>
            <p className="text-xs leading-relaxed">
              全球唯一经认证的蛤学纳米学位项目，致力于推动膜蛤文化的学术化进程。
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">课程体系</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/courses" className="hover:text-white transition-colors">全部课程</Link></li>
              <li><Link to="/courses/ha-101" className="hover:text-white transition-colors">膜蛤导论</Link></li>
              <li><Link to="/courses/ha-201" className="hover:text-white transition-colors">蛤蟆符号学</Link></li>
              <li><Link to="/courses/ha-401" className="hover:text-white transition-colors">膜蛤综合实践</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">关于我们</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/instructor/jiang" className="hover:text-white transition-colors">首席讲师</Link></li>
              <li><Link to="/certificate" className="hover:text-white transition-colors">纳米学位认证</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3">学术声明</h3>
            <p className="text-xs leading-relaxed">
              蛤学院所有课程内容仅供学术研究参考。本院不对任何形式的膜蛤行为承担法律责任。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© 2025 蛤学院 HA Academy. 保留所有学术权利。</p>
          <p className="text-xs">由江泽民教授倾心打造</p>
        </div>
      </div>
    </footer>
  )
}
