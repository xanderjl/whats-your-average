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
  },
  {
    size: "M",
    variant_id: 505,
  },
  {
    size: "L",
    variant_id: 536,
  },
  {
    size: "XL",
    variant_id: 567,
  },
  {
    size: "2XL",
    variant_id: 598,
  },
  {
    size: "3XL",
    variant_id: 629,
  },
]

export const variantsBySize = Object.fromEntries(
  variantIDs.map(({ size, variant_id }) => {
    return [size, variant_id]
  })
)

export const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
