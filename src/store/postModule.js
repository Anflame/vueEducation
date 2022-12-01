import axios from 'axios';
export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: true,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      {
        value: 'title',
        name: 'Сортировка по назаванию',
      },
      {
        value: 'body',
        name: 'Сортировка по описанию',
      },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]),
      );
    },
    sortedAndSeachedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery),
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPage(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          'setTotalPage',
          Math.ceil(response.headers['x-total-count'] / state.limit),
        );
        commit('setPosts', response.data);
      } catch (e) {
        console.log('Ошибка fetchPosts', e);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit(
          'setTotalPage',
          Math.ceil(response.headers['x-total-count'] / state.limit),
        );
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (e) {
        console.log('Ошибка loadmoreposts', e);
      }
    },
  },
  namespaced: true,
};
