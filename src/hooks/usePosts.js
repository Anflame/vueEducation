import axios from 'axios';
import { ref } from 'vue';

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?',
        {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        },
      );
      totalPages.value = Math.ceil(
        response.headers['x-total-count'] / this.limit,
      );
      posts.value = response.data;
    } catch (e) {
      alert('Ошибка', e);
    } finally {
      isPostLoading.value = false;
    }
  };
  onMounted(fetching);

  return {
    posts,
    isPostLoading,
    totalPages,
  };
}
