import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.topNav}>
          <button className={styles.logoButton}>
            <Image
              src="/images/logo.png"
              alt="myrealtrip"
              width={128}
              height={27}
              priority
            />
          </button>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <span className={styles.searchText}>
                &quot;EPL 공식&quot; 기간 한정 쿠폰(~7/22)
              </span>
              <Image
                src="/icons/search-gray.png"
                alt="search"
                width={20}
                height={20}
              />
            </div>
          </div>
          <button className={styles.partnerButton}>파트너 로그인</button>
          <button className={styles.loginButton}>로그인 및 회원가입</button>
        </div>
        <div className={styles.bottomNav}>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>
              홈
            </a>
            <a href="#" className={styles.navLink}>
              혜택
              <Image
                src="/icons/new.png"
                alt="new"
                width={14}
                height={14}
                className={styles.newIcon}
              />
            </a>
            <a href="#" className={styles.navLink}>
              항공
            </a>
            <a href="#" className={styles.navLink}>
              해외 숙소
            </a>
            <a href="#" className={styles.navLink}>
              국내 숙소
            </a>
            <a href="#" className={styles.navLink}>
              투어·티켓
            </a>
            <a href="#" className={styles.navLink}>
              해외여행보험
            </a>
            <a href="#" className={styles.navLink}>
              롯데특가위크
              <Image
                src="/icons/new.png"
                alt="new"
                width={14}
                height={14}
                className={styles.newIcon}
              />
            </a>
            <a href="#" className={styles.navLink}>
              에어텔 특가
            </a>
            <button className={styles.moreButton}>
              더보기
              <Image
                src="/icons/more.png"
                alt="more"
                width={20}
                height={20}
                className={styles.moreIcon}
              />
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Footer content will be here */}
        </div>
      </footer>
    </div>
  );
}
