const toUSD = (price: string): string => {
  const p = parseFloat(price).toFixed(2)
  return `$${p}`
}

export { toUSD }
