import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "hello"
declare module "/Users/dmomoh/Documents/GitHub/aniwork/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}