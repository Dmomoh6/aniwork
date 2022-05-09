import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  width: 1000,
  jobs: [],
  generalLoading: false,
  theme: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  width: (state) => state.width,
  jobs: (state) => state.jobs,
  generalLoading: (state) => state.generalLoading,
  theme: (state) => state.theme,
}

export const mutations: MutationTree<RootState> = {
  UPDATE_WIDTH: (state, newWidth: number) => (state.width = newWidth),
  UPDATE_JOBS: (state, newJobs: any) => (state.jobs = newJobs),
  UPDATE_GENERAL_LOADING: (state, newLoading: boolean) =>
    (state.generalLoading = newLoading),
  UPDATE_THEME: (state, newTheme: string) => (state.theme = newTheme),
}

export const actions: ActionTree<RootState, RootState> = {
  changeWidth({ commit }, width: number) {
    commit('UPDATE_WIDTH', width)
  },
  changeJobs({ commit }, jobs: object) {
    commit('UPDATE_JOBS', jobs)
  },
  changeLoading({ commit }, loading: boolean) {
    commit('UPDATE_GENERAL_LOADING', loading)
  },
  setTheme({ commit }, theme: string) {
    commit('UPDATE_THEME', theme)
  },
}
