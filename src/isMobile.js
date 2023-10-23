// isMobile.js

import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMobile = ref(window.innerWidth <= 400);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 400;
};

const useIsMobile = () => {
  onMounted(() => {
    window.addEventListener('resize', checkIsMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkIsMobile);
  });

  return isMobile;
};

export default useIsMobile;
