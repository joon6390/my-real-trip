"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isTourTicketsPage = pathname === "/tour-tickets";
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
            <a
              href="/tour-tickets"
              className={`${styles.navLink} ${
                isTourTicketsPage ? styles.navLinkActive : ""
              }`}
            >
              투어·티켓
              {isTourTicketsPage && (
                <span className={styles.activeIndicator}></span>
              )}
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
          <div className={styles.footerTop}>
            <div className={styles.customerSupport}>
              <h3 className={styles.customerSupportTitle}>
                고객지원실 운영안내
              </h3>
              <div className={styles.customerSupportList}>
                <div className={styles.customerSupportItem}>
                  채팅상담 연중무휴 24시간
                  <br />
                  유선상담 연중무휴 09:00-18:00
                </div>
                <div className={styles.customerSupportItem}>
                  대표번호 1670-8208
                </div>
              </div>
              <button className={styles.inquiryButton}>문의하기</button>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerLinkSection}>
                <h4 className={styles.footerLinkTitle}>소개</h4>
                <div className={styles.footerLinkList}>
                  <a href="#" className={styles.footerLinkItem}>
                    회사소개
                  </a>
                  <a href="#" className={styles.footerLinkItem}>
                    채용
                  </a>
                  <a href="#" className={styles.footerLinkItem}>
                    공고
                  </a>
                </div>
              </div>
              <div className={styles.footerLinkSection}>
                <h4 className={styles.footerLinkTitle}>파트너</h4>
                <div className={styles.footerLinkList}>
                  <a href="#" className={styles.footerLinkItem}>
                    파트너 홈
                  </a>
                  <a href="#" className={styles.footerLinkItem}>
                    제휴 문의
                  </a>
                  <a href="#" className={styles.footerLinkItem}>
                    광고 문의
                  </a>
                </div>
              </div>
              <div className={styles.footerLinkSection}>
                <h4 className={styles.footerLinkTitle}>지원</h4>
                <div className={styles.footerLinkList}>
                  <a href="#" className={styles.footerLinkItem}>
                    공지사항/FAQ
                  </a>
                  <a href="#" className={styles.footerLinkItem}>
                    최저가 보장제
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomLinksRow}>
              <div className={styles.footerBottomLinks}>
                <a href="#" className={styles.footerBottomLink}>
                  이용 약관
                </a>
                <a href="#" className={styles.footerBottomLinkBold}>
                  개인정보 처리방침
                </a>
                <a href="#" className={styles.footerBottomLink}>
                  취소 및 환불 정책
                </a>
              </div>
              <div className={styles.footerSocialApps}>
                <div className={styles.footerSocialIcons}>
                  <a href="#" className={styles.footerSocialIcon}>
                    <Image
                      src="/icons/facebook.png"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <Image
                      src="/icons/naver.png"
                      alt="naver"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <Image
                      src="/icons/instagram.png"
                      alt="instagram"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="#" className={styles.footerSocialIcon}>
                    <Image
                      src="/icons/youtube.png"
                      alt="youtube"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div className={styles.footerDivider}></div>
                <div className={styles.footerAppIcons}>
                  <a href="#" className={styles.footerAppIcon}>
                    <Image
                      src="/icons/apple.png"
                      alt="appstore"
                      width={20}
                      height={20}
                    />
                  </a>
                  <a href="#" className={styles.footerAppIcon}>
                    <Image
                      src="/icons/play.png"
                      alt="googleplay"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <button className={styles.languageButton}>
                  <Image
                    src="/icons/globe.png"
                    alt="globe"
                    width={24}
                    height={24}
                    className={styles.languageIcon}
                  />
                  <span className={styles.languageText}>한국어</span>
                  <Image
                    src="/icons/Button-Next-slide.png"
                    alt="arrow"
                    width={14}
                    height={14}
                    className={styles.languageArrow}
                  />
                </button>
              </div>
            </div>
            <div className={styles.footerCompanyInfo}>
              <div className={styles.footerCompanyInfoRow}>
                <span>
                  상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자
                  김형석 | 사업자등록번호 209-81-55339
                </span>
                <a href="#" className={styles.footerCompanyInfoLink}>
                  사업자정보확인
                </a>
                <span>
                  {" "}
                  | 통신판매업신고번호 2019-서울서초-0260 | 관광사업등록번호 :
                  제2019-3호
                </span>
              </div>
              <div className={styles.footerCompanyInfoRowSecond}>
                주소 서울특별시 서초구 강남대로 311, 18층 1729호(서초동,
                한화생명보험빌딩) | 이메일 help@myrealtrip.com | 마케팅 문의
                marketing@myrealtrip.com
                <br />
                제휴 문의 partnership@myrealtrip.com | 호스팅 서비스 제공자 :
                (주)마이리얼트립
              </div>
              <div className={styles.footerCompanyInfoRow}>
                자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
                영업보증보험: 1.5억원 / 기획여행보증: 2억원
                <br />
                마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
                따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
                <br />
                부득이한 사정에 의해 확정된 여행일정이 변경되는 경우 여행자의
                사전 동의를 받습니다.
              </div>
              <div className={styles.footerCompanyInfoRowLast}>
                <span className={styles.footerCompanyInfoRowLastText}>
                  (주)마이리얼트립이 소유, 운영, 관리하는 웹사이트 및 앱 내의
                  상품, 판매자 정보, 이벤트 정보, 디자인, UI 등을 포함한 일체의
                  콘텐츠에 대한 무단 복제, 배포, 전송, 스크래핑 등의 행위는
                  저작권법 등 관련 법령에 의하여 엄격
                  <br />히 금지됩니다.
                </span>
                <Image
                  src="/icons/Button-ISMS-P.png"
                  alt="ISMS-P"
                  width={56}
                  height={40}
                  className={styles.footerIsmsImage}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
