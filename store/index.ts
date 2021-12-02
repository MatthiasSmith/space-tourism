import { UIType } from '~/types/ui'

export interface State {
  ui: UIType
}

export const state = () => ({
  ui: {
    isMobileNavOpen: false,
  },
})

export const mutations = {
  setMobileNavOpenClosed(state: State, isOpen: boolean) {
    state.ui.isMobileNavOpen = isOpen
  },
}

export const actions = {
  toggleMobileNav({ commit }: { commit: any }, isOpen: boolean) {
    commit('setMobileNavOpenClosed', isOpen)
  },
}
