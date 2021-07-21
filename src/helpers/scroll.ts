/**
 * 무한스크롤 처리를 위한 스크롤 위치 체크
 */
export const checkInfiniteScrollPosition = ({ bottom = 800 }: { bottom?: number }) => {
  const { scrollHeight, clientHeight } = document.documentElement;
  const scrollTop = window.scrollY;
  const targetTop = scrollHeight - bottom;
  const currentTop = scrollTop + clientHeight;
  return targetTop <= currentTop;
};
