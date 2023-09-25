export function getFormatDate(date: string) {
  return new Date(date).toLocaleDateString('es-ar', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
}