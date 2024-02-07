function getNoticeSkeletonArray() {
  if (innerWidth > 1280) {
    return [1, 2, 3, 4];
  } else if (innerWidth <= 1280 && innerWidth > 1024) {
    return [1, 2, 3];
  } else if (innerWidth <= 1024 && innerWidth > 768) {
    return [1, 2];
  } else {
    return [1];
  }
}

export const NOTICE_SKELETON_ARRAY = getNoticeSkeletonArray();

export const EMPLOYEE_SKELETON_ARRAY =
  window.innerWidth > 1024 ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6];
