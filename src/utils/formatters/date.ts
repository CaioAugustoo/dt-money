export function formatDate(date: Date | number) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}
