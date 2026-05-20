import styles from './KakaoButton.module.css'
import { useT } from '../context/LocaleContext'

const KakaoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3C6.477 3 2 6.925 2 11.766c0 3.031 1.748 5.698 4.388 7.28L5.43 22.1a.4.4 0 0 0 .566.47l4.27-2.48c.567.077 1.147.117 1.734.117 5.523 0 10-3.925 10-8.768C22 6.925 17.523 3 12 3z"/>
  </svg>
)

interface Props {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function KakaoButton({ size = 'md', className = '' }: Props) {
  const t = useT()

  return (
    <a
      href="https://pf.kakao.com/_ySgVX"
      className={`${styles.btn} ${styles[size]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <KakaoIcon />
      {t.footer.kakaoConsult}
    </a>
  )
}
