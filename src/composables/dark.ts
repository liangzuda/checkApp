// these APIs are auto-imported from @vueuse/core

// export const isDark = useDark()
export const isDark = ref(false) // 暂时关闭夜间模式，后续支持

// export const toggleDark = useToggle(isDark)
// 禁用 toggle
export function toggleDark() {
  isDark.value = false
}

// export const preferredDark = usePreferredDark()
// 不监听系统夜间模式（直接关闭）
export const preferredDark = ref(false)
