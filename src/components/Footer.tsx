import styles from './Footer.module.css'
import KakaoButton from './KakaoButton'
import { useT } from '../context/LocaleContext'

export default function Footer() {
  const t = useT()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.imageBlock}>
            <p className={styles.imageLabel}>{t.footer.imageLabel}</p>
            <div className={styles.clinicImage}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_ddfd8a7c4887414ea382dc922e797f4c.png"
                alt={t.footer.imageAlt}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.logo}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_8458e95216dd4a7b8de2647db581460e.png"
                alt="왕실의원 로고"
                className={styles.logoImg}
              />
            </div>

            <div className={styles.phone}>
              <p className={styles.phoneLabel}>{t.footer.phoneLabel}</p>
              <a href="tel:0324353571" className={styles.phoneNumber}>032) 435-3571</a>
              <KakaoButton size="sm" />
            </div>

            <div className={styles.addressBlock}>
              <p>{t.footer.address}</p>
              <p>{t.footer.bizInfo}</p>
              <p>{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
