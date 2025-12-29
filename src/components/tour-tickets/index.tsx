import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TourTickets() {
  return (
    <div className={styles.container}>
      {/* 검색 섹션 */}
      <section className={styles.searchSection}>
        <div className={styles.searchBorder}>
          <div className={styles.searchInput}>
            <div className={styles.searchContainer}>
              <span className={styles.searchText}>
                &quot;싹쓸이위크&quot; 중국홍콩대만 초특가
              </span>
            </div>
            <div className={styles.searchIcon}>
              <Image
                src="/icons/search-white.png"
                alt="search"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className={styles.regionContainerInSearch}>
          <div className={styles.regionLinks}>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/Barcelona.png"
                  alt="바르셀로나"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/Tokyo.png"
                  alt="도쿄"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/Bangkok.png"
                  alt="방콕"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/Osaka.png"
                  alt="오사카"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/DaNang.png"
                  alt="다낭"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
            <a href="#" className={styles.regionLink}>
              <div className={styles.regionImageWrapper}>
                <Image
                  src="/images/Paris.png"
                  alt="파리"
                  width={160}
                  height={107}
                  className={styles.regionImage}
                />
              </div>
            </a>
          </div>
          <button className={styles.nextButton}>
            <Image
              src="/icons/Button-Next-slide.png"
              alt="next"
              width={40}
              height={40}
            />
          </button>
        </div>
      </section>

      {/* 광고 배너 섹션 */}
      <section className={styles.adSection}>
        <div className={styles.adContainer}>
          <div className={styles.adBanner}>
            <div className={styles.adBackgroundWrapper}>
              <Image
                src="/images/banner.png"
                alt="광고 배너"
                width={1020}
                height={170}
                className={styles.adBackground}
              />
              <div className={styles.adOverlay}></div>
            </div>
            <div className={styles.adBottomRight}>
              <div className={styles.adLabel}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 이토시마 투어 섹션 */}
      <section className={styles.tourSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            🌊여름 강추 여행,이토시마 투어🌴
          </h2>
          <a href="#" className={styles.moreLink}>
            더 보기{" "}
            <Image src="/icons/more2.png" alt="more" width={7} height={10} />
          </a>
        </div>
        <div className={styles.tourContainer}>
          <div className={styles.tourCards}>
            <a href="#" className={styles.tourCard}>
              <div className={styles.tourCardImageWrapper}>
                <Image
                  src="/images/Image5.png"
                  alt="이토시마 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.tourCardBadgeContainer}>
                  <div className={styles.tourCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>4441</span>
                  </div>
                </div>
              </div>
              <div className={styles.tourCardContent}>
                <div className={styles.tourCardCategory}>투어 ・ 후쿠오카</div>
                <h3 className={styles.tourCardTitle}>
                  [매일확정, 🎁소금푸딩] 이토시마 후 쿠오카 일일
                  버스투어(이토시마, 가…
                </h3>
                <div className={styles.tourCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>266</span>
                </div>
                <div className={styles.tourCardPrice}>
                  <span className={styles.price}>54,000</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.tourCard}>
              <div className={styles.tourCardImageWrapper}>
                <Image
                  src="/images/Image6.png"
                  alt="이토시마 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.tourCardBadgeContainer}>
                  <div className={styles.tourCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>919</span>
                  </div>
                </div>
              </div>
              <div className={styles.tourCardContent}>
                <div className={styles.tourCardCategory}>투어 ・ 후쿠오카</div>
                <h3 className={styles.tourCardTitle}>
                  [3월~11월 한정 10시 출발 ] 프리미엄 이토시마 버스투어 2025년
                </h3>
                <div className={styles.tourCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>97</span>
                </div>
                <div className={styles.tourCardPrice}>
                  <span className={styles.price}>71,110</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.tourCard}>
              <div className={styles.tourCardImageWrapper}>
                <Image
                  src="/images/Image7.png"
                  alt="이토시마 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.tourCardBadgeContainer}>
                  <div className={styles.tourCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>197</span>
                  </div>
                </div>
              </div>
              <div className={styles.tourCardContent}>
                <div className={styles.tourCardCategory}>투어 ・ 후쿠오카</div>
                <h3 className={styles.tourCardTitle}>
                  [하루하루투어] 후쿠오카 이토시마 반 나절 버스투어 1명부터
                  대형버스 한…
                </h3>
                <div className={styles.tourCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>12</span>
                </div>
                <div className={styles.tourCardPrice}>
                  <span className={styles.price}>29,900</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.tourCard}>
              <div className={styles.tourCardImageWrapper}>
                <Image
                  src="/images/Image8.png"
                  alt="이토시마 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.tourCardBadgeContainer}>
                  <div className={styles.tourCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>296</span>
                  </div>
                </div>
              </div>
              <div className={styles.tourCardContent}>
                <div className={styles.tourCardCategory}>투어 ・ 후쿠오카</div>
                <h3 className={styles.tourCardTitle}>
                  후쿠오카 이토시마 반나절 버스 투어 TOP3 소금 공방N사쿠라이
                  후타미…
                </h3>
                <div className={styles.tourCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>5</span>
                </div>
                <div className={styles.tourCardPrice}>
                  <span className={styles.price}>32,000</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
          </div>
          <button className={styles.tourNextButton}>
            <Image
              src="/icons/Button-Next-slide.png"
              alt="next"
              width={40}
              height={40}
            />
          </button>
        </div>
      </section>

      {/* EPL 티켓 섹션 */}
      <section className={styles.ticketSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>25/26시즌 EPL 티켓 모아보기✨</h2>
          <a href="#" className={styles.moreLink}>
            더 보기{" "}
            <Image src="/icons/more2.png" alt="more" width={7} height={10} />
          </a>
        </div>
        <div className={styles.ticketContainer}>
          <div className={styles.ticketCards}>
            <a href="#" className={styles.ticketCard}>
              <div className={styles.ticketCardImageWrapper}>
                <Image
                  src="/images/Image13.png"
                  alt="EPL 티켓"
                  width={250}
                  height={166}
                />
              </div>
              <div className={styles.ticketCardContent}>
                <div className={styles.ticketCardCategory}>
                  티켓·입장권 ・ 런던
                </div>
                <h3 className={styles.ticketCardTitle}>
                  🔥한정특가🔥 [토트넘 홈] EPL 영국 프리미어리그 25/26시즌 공식
                  티켓…
                </h3>
                <div className={styles.ticketCardRating}>
                  <div className={styles.stars}>★★★★☆</div>
                  <span className={styles.ratingCount}>39</span>
                </div>
                <div className={styles.ticketCardPrice}>
                  <span className={styles.price}>164,227</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.ticketCard}>
              <div className={styles.ticketCardImageWrapper}>
                <Image
                  src="/images/Image14.png"
                  alt="EPL 티켓"
                  width={250}
                  height={166}
                />
              </div>
              <div className={styles.ticketCardContent}>
                <div className={styles.ticketCardCategory}>
                  티켓·입장권 ・ 런던
                </div>
                <h3 className={styles.ticketCardTitle}>
                  [토트넘 홈] EPL 영국 프리미어리그 25/26시즌 공식 티켓⚽
                </h3>
                <div className={styles.ticketCardRating}>
                  <div className={styles.stars}>★★★★☆</div>
                  <span className={styles.ratingCount}>171</span>
                </div>
                <div className={styles.ticketCardPrice}>
                  <span className={styles.price}>197,819</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.ticketCard}>
              <div className={styles.ticketCardImageWrapper}>
                <Image
                  src="/images/image.png"
                  alt="EPL 티켓"
                  width={250}
                  height={166}
                />
              </div>
              <div className={styles.ticketCardContent}>
                <div className={styles.ticketCardCategory}>
                  티켓·입장권 ・ 런던
                </div>
                <h3 className={styles.ticketCardTitle}>
                  [아스널 홈] EPL 영국 프리미어리그 25/26시즌 공식 티켓⚽
                </h3>
                <div className={styles.ticketCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>10</span>
                </div>
                <div className={styles.ticketCardPrice}>
                  <span className={styles.price}>867,315</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.ticketCard}>
              <div className={styles.ticketCardImageWrapper}>
                <Image
                  src="/images/image.png"
                  alt="EPL 티켓"
                  width={250}
                  height={166}
                />
                <div className={styles.ticketCardBadgeContainer}>
                  <div className={styles.ticketCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>40</span>
                  </div>
                </div>
              </div>
              <div className={styles.ticketCardContent}>
                <div className={styles.ticketCardCategory}>
                  티켓·입장권 ・ 런던
                </div>
                <h3 className={styles.ticketCardTitle}>
                  [리버풀 홈] EPL 영국 프리미어리그 25/26시즌 공식 티켓⚽
                </h3>
                <div className={styles.ticketCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>1</span>
                </div>
                <div className={styles.ticketCardPrice}>
                  <span className={styles.price}>223,946</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
          </div>
          <button className={styles.tourNextButton}>
            <Image
              src="/icons/Button-Next-slide.png"
              alt="next"
              width={40}
              height={40}
            />
          </button>
        </div>
      </section>

      {/* 치앙마이 투어 섹션 */}
      <section className={styles.chiangmaiSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            ✨치앙마이 자유여행 단독 특가 오픈✨
          </h2>
          <a href="#" className={styles.moreLink}>
            더 보기{" "}
            <Image src="/icons/more2.png" alt="more" width={7} height={10} />
          </a>
        </div>
        <div className={styles.chiangmaiContainer}>
          <div className={styles.chiangmaiCards}>
            <a href="#" className={styles.chiangmaiCard}>
              <div className={styles.chiangmaiCardImageWrapper}>
                <Image
                  src="/images/Image9.png"
                  alt="치앙마이 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.chiangmaiCardBadgeContainer}>
                  <div className={styles.chiangmaiCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>3281</span>
                  </div>
                </div>
                <div className={styles.chiangmaiCardSpecialContainer}>
                  <div className={styles.chiangmaiCardSpecial}>7월 특가</div>
                </div>
              </div>
              <div className={styles.chiangmaiCardContent}>
                <div className={styles.chiangmaiCardCategory}>
                  투어 ・ 치앙마이
                </div>
                <h3 className={styles.chiangmaiCardTitle}>
                  [1+1특가] 치앙마이 야간 도이수텝 + 왓우몽사원 (호텔 픽업 드랍
                  포함)
                </h3>
                <div className={styles.chiangmaiCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>516</span>
                </div>
                <div className={styles.chiangmaiCardPrice}>
                  <span className={styles.price}>12,500</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.chiangmaiCard}>
              <div className={styles.chiangmaiCardImageWrapper}>
                <Image
                  src="/images/Image10.png"
                  alt="치앙마이 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.chiangmaiCardBadgeContainer}>
                  <div className={styles.chiangmaiCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>771</span>
                  </div>
                </div>
                <div className={styles.chiangmaiCardSpecialContainer}>
                  <div className={styles.chiangmaiCardSpecial}>7월 특가</div>
                </div>
              </div>
              <div className={styles.chiangmaiCardContent}>
                <div className={styles.chiangmaiCardCategory}>
                  투어 ・ 치앙마이
                </div>
                <h3 className={styles.chiangmaiCardTitle}>
                  [하루만에 다 보기]몬쨈&엘리핀팜&싸 이프레스레인&도이수텝 투어
                </h3>
                <div className={styles.chiangmaiCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>41</span>
                </div>
                <div className={styles.chiangmaiCardPrice}>
                  <span className={styles.price}>62,000</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.chiangmaiCard}>
              <div className={styles.chiangmaiCardImageWrapper}>
                <Image
                  src="/images/Image11.png"
                  alt="치앙마이 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.chiangmaiCardBadgeContainer}>
                  <div className={styles.chiangmaiCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>415</span>
                  </div>
                </div>
                <div className={styles.chiangmaiCardSpecialContainer}>
                  <div className={styles.chiangmaiCardSpecial}>7월 특가</div>
                </div>
              </div>
              <div className={styles.chiangmaiCardContent}>
                <div className={styles.chiangmaiCardCategory}>
                  투어 ・ 치앙마이
                </div>
                <h3 className={styles.chiangmaiCardTitle}>
                  당일 예약 가능 / [왕복 픽드랍, 입장료 포함] 왓파랏&도이수텝
                  야경투어
                </h3>
                <div className={styles.chiangmaiCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>42</span>
                </div>
                <div className={styles.chiangmaiCardPrice}>
                  <span className={styles.price}>19,000</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
            <a href="#" className={styles.chiangmaiCard}>
              <div className={styles.chiangmaiCardImageWrapper}>
                <Image
                  src="/images/Image12.png"
                  alt="치앙마이 투어"
                  width={250}
                  height={166}
                />
                <div className={styles.chiangmaiCardBadgeContainer}>
                  <div className={styles.chiangmaiCardBadge}>
                    <Image
                      src="/icons/bookmark.png"
                      alt="bookmark"
                      width={24}
                      height={24}
                    />
                    <span>723</span>
                  </div>
                </div>
                <div className={styles.chiangmaiCardSpecialContainer}>
                  <div className={styles.chiangmaiCardSpecial}>7월 특가</div>
                </div>
              </div>
              <div className={styles.chiangmaiCardContent}>
                <div className={styles.chiangmaiCardCategory}>
                  투어 ・ 치앙마이
                </div>
                <h3 className={styles.chiangmaiCardTitle}>
                  [왓우몽, 왓파랏, No.39 cafe, 픽드랍 모두포함] 치앙마이
                  도이수텝 야경…
                </h3>
                <div className={styles.chiangmaiCardRating}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.ratingCount}>75</span>
                </div>
                <div className={styles.chiangmaiCardPrice}>
                  <span className={styles.price}>32,000</span>
                  <span className={styles.currency}>원</span>
                  <span className={styles.perPerson}> / 1인</span>
                </div>
              </div>
            </a>
          </div>
          <button className={styles.tourNextButton}>
            <Image
              src="/icons/Button-Next-slide.png"
              alt="next"
              width={40}
              height={40}
            />
          </button>
        </div>
      </section>
    </div>
  );
}
