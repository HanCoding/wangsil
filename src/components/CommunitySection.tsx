import { useRef, useEffect, useState } from 'react'
import styles from './CommunitySection.module.css'

interface Post {
  title: string
  date: string
  isNew?: boolean
}

interface BoardProps {
  title: string
  labelEn: string
  posts: Post[]
  href: string
  icon: React.ReactNode
  active?: boolean
}

const noticeIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 3C8 3 3 7.5 3 13s5 10 11 10c1.2 0 2.3-.2 3.4-.5L22 26l-1-5.2A10 10 0 0 0 25 13c0-5.5-5-10-11-10z"/>
  </svg>
)

const eventIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="14" cy="14" r="11"/>
    <path d="M14 8v6l4 4"/>
    <path d="M9 4l2 4M19 4l-2 4"/>
  </svg>
)

const newsIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="5" width="22" height="18" rx="2"/>
    <path d="M8 10h12M8 14h12M8 18h8"/>
  </svg>
)

const sampleNotices: Post[] = [
  { title: 'test', date: '05-08' },
  { title: '봄맞이 기념 무료 이벤트 공지!!!', date: '04-06', isNew: true },
  { title: '부모님 거상 선물해드리려고요 1', date: '04-03' },
  { title: '비용문의 상담합니다- 1', date: '09-20' },
  { title: '지방흡입 문의합니다', date: '09-20' },
  { title: '안면윤곽 비용이랑 상담받고 싶어요~', date: '09-20' },
]

const sampleEvents: Post[] = [
  { title: '가을이벤트 보톡스 이벤트!', date: '09-20', isNew: true },
  { title: '코재수술 더블할인 이벤트! 8.31까지', date: '09-20', isNew: true },
  { title: '이마보톡스 할인 이벤트(♡)', date: '09-20' },
  { title: '수험생할인 이벤트', date: '09-20' },
  { title: '인스타그램 인증샷 할인 이벤트!', date: '09-20' },
  { title: '지금 셀카후기 등록하면 무료 보톡스 1회!', date: '09-20' },
]

const samplePress: Post[] = [
  { title: 'test', date: '05-08' },
  { title: '봄맞이 기념 무료 이벤트 공지!!!', date: '04-06', isNew: true },
  { title: '부모님 거상 선물해드리려고요 1', date: '04-03' },
  { title: '비용문의 상담합니다- 1', date: '09-20' },
  { title: '지방흡입 문의합니다', date: '09-20' },
  { title: '안면윤곽 비용이랑 상담받고 싶어요~', date: '09-20' },
]

function Board({ title, labelEn, posts, href, icon, active }: BoardProps) {
  return (
    <div className={`${styles.board} ${active ? styles.boardActive : ''}`}>
      <div className={styles.boardHeader}>
        <div className={styles.boardIcon}>{icon}</div>
        <h3 className={styles.boardTitle}>{title}</h3>
      </div>
      <div className={styles.boardBody}>
        <div className={styles.boardMeta}>
          <span className={styles.boardLabelEn}>{labelEn}</span>
          <a href={href} className={styles.moreLink}>더보기</a>
        </div>
        <ul className={styles.postList}>
          {posts.map((post, idx) => (
            <li key={idx} className={styles.postItem}>
              <a href={href} className={styles.postTitle}>
                {post.isNew && <span className={styles.newBadge}>N</span>}
                <span>‐ {post.title}</span>
              </a>
              <span className={styles.postDate}>{post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function useIntersection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export default function CommunitySection() {
  const { ref, visible } = useIntersection()
  const [activeTab, setActiveTab] = useState<'notice' | 'event' | 'press'>('event')

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`} ref={ref}>
          <h2 className="section-title">COMMUNITY</h2>
          <p className="section-subtitle">왕실의원 커뮤니티</p>
          <div className="section-divider"><div className="section-divider-dot" /></div>
        </div>

        {/* Desktop 3-column board */}
        <div className={styles.desktopGrid}>
          <Board
            title="공지사항"
            labelEn="온라인상담"
            posts={sampleNotices}
            href="/community/notice"
            icon={noticeIcon}
          />
          <Board
            title="이벤트"
            labelEn="이벤트"
            posts={sampleEvents}
            href="/community/events"
            icon={eventIcon}
            active
          />
          <Board
            title="언론보도"
            labelEn="온라인상담"
            posts={samplePress}
            href="/community/press"
            icon={newsIcon}
          />
        </div>

        {/* Mobile Tab board */}
        <div className={styles.mobileTabs}>
          <div className={styles.tabButtons}>
            {(['notice', 'event', 'press'] as const).map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'notice' ? '공지사항' : tab === 'event' ? '이벤트' : '언론보도'}
              </button>
            ))}
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'notice' && (
              <ul className={styles.postList}>
                {sampleNotices.map((post, idx) => (
                  <li key={idx} className={styles.postItem}>
                    <a href="/community/notice" className={styles.postTitle}>
                      {post.isNew && <span className={styles.newBadge}>N</span>}
                      <span>‐ {post.title}</span>
                    </a>
                    <span className={styles.postDate}>{post.date}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'event' && (
              <ul className={styles.postList}>
                {sampleEvents.map((post, idx) => (
                  <li key={idx} className={styles.postItem}>
                    <a href="/community/events" className={styles.postTitle}>
                      {post.isNew && <span className={styles.newBadge}>N</span>}
                      <span>‐ {post.title}</span>
                    </a>
                    <span className={styles.postDate}>{post.date}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'press' && (
              <ul className={styles.postList}>
                {samplePress.map((post, idx) => (
                  <li key={idx} className={styles.postItem}>
                    <a href="/community/press" className={styles.postTitle}>
                      {post.isNew && <span className={styles.newBadge}>N</span>}
                      <span>‐ {post.title}</span>
                    </a>
                    <span className={styles.postDate}>{post.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
