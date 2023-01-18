export const priceTransform = value => {
  const trunkFirst = Math.trunc(value).toString()
  const trunkSecound = Math.trunc(value)
    .toString()
    .slice(-2)
  const convertString = value.toLocaleString(process.env.BASE_COUNTRY, { style: "currency", currency: process.env.BASE_CURRENCY });

  return { trunkFirst, trunkSecound, convertString }
}
