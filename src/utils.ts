export function debounce<Args extends any[], F extends (...args: Args) => void>(
  func: F,
  wait: number
) {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Args) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}
