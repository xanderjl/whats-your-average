/**
 * Unisex Basic Softstyle T-Shirt | Gildan 64000
 * S Black ID: 474
 * M Black ID: 505
 * L Black ID: 536
 * XL Black ID: 567
 * 2XL Black ID: 598
 * 3XL Black ID: 629
 */

export const variantIDs = [
  {
    size: "S",
    variant_id: 474,
    cost: 35,
  },
  {
    size: "M",
    variant_id: 505,
    cost: 35,
  },
  {
    size: "L",
    variant_id: 536,
    cost: 35,
  },
  {
    size: "XL",
    variant_id: 567,
    cost: 35,
  },
  {
    size: "2XL",
    variant_id: 598,
    cost: 40,
  },
  // {
  //   size: "3XL",
  //   variant_id: 629,
  // },
]

export const variantsBySize = Object.fromEntries(
  variantIDs.map(({ size, variant_id }) => [size, variant_id])
)

export const costBySize = Object.fromEntries(
  variantIDs.map(({ size, cost }) => [size, cost])
)

export const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
