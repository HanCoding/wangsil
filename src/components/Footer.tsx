import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left: interior image */}
          <div className={styles.imageBlock}>
            <p className={styles.imageLabel}>병원내부</p>
            <div className={styles.clinicImage}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_ddfd8a7c4887414ea382dc922e797f4c.png"
                alt="왕실의원 내부"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: contact info */}
          <div className={styles.infoBlock}>
            <div className={styles.logo}>
              <img
                src="https://alice4871277.aty.kr/1774005383242/image/resize_8458e95216dd4a7b8de2647db581460e.png"
                alt="왕실의원 로고"
                className={styles.logoImg}
              />
            </div>

            <div className={styles.phone}>
              <p className={styles.phoneLabel}>대표전화</p>
              <a href="tel:0324353571" className={styles.phoneNumber}>032) 435-3571</a>
              <a href="https://pf.kakao.com/_ySgVX" className={styles.consultBtn} target="_blank" rel="noopener noreferrer">카카오 상담</a>
            </div>

            <div className={styles.addressBlock}>
              <p>인천광역시 부평구 경인로 948 2층 201호 왕실의원 (유성메디칼빌딩)</p>
              <p>상호명 : 왕실의원 대표자명 : 임한국 사업자등록번호 : 191-78-00509</p>
              <p>COPYRIGHT(C) 2018 왕실의원. ALL RIGHT RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
