export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-EN').format(number)
}
