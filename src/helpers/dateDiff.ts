export function dateDiff(date: string) {
  const now = new Date();
  const diff = now - new Date(date);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 1) {
    return `${hours} hours  ago`;
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  return 'Few seconds ago';
}
