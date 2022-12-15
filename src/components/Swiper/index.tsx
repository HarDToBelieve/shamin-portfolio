import { Autoplay, Lazy, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { PaginationOptions } from "swiper/types";
import styles from "./swiper.module.scss";

type BaseSwiperProps = {
  children: any;
  showNavigation?: boolean;
  showPagination?: boolean;
  handleSlideChange?: (data: any) => void;
  setSwiperRef?: any;
  theme: "dark" | "light";
};

const BaseSwiper = (props: BaseSwiperProps) => {
  const {
    children,
    showPagination = true,
    showNavigation = false,
    handleSlideChange,
    setSwiperRef,
    theme = "light",
  } = props;
  const pagination: boolean | PaginationOptions = showPagination
    ? {
        clickable: true,
        bulletClass:
          styles.paginationBullet +
          " " +
          (theme === "light" ? styles.lightTheme : styles.darkTheme),
        bulletActiveClass: styles.paginationBulletActive,
      }
    : false;
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      lazy
      pagination={pagination}
      navigation={showNavigation}
      modules={[Lazy, Autoplay, Pagination, Navigation]}
      onSlideChangeTransitionEnd={handleSlideChange}
    >
      {children}
    </Swiper>
  );
};

export default BaseSwiper;
