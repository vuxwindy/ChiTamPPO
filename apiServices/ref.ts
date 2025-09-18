import refModel from '@/models/refModel'

/**
 * The function `getRefByAddress` retrieves a reference by its address from a database using TypeScript
 * and async/await syntax.
 * @param {string} address - The `getRefByAddress` function is designed to retrieve a reference by its
 * address. The `address` parameter is a string that represents the address of the reference you want
 * to retrieve.
 * @returns The function `getRefByAddress` is returning a promise that resolves to an array of
 * documents found in the `refModel` collection where the `refAddress` field matches the provided
 * `address` parameter.
 */
export const getAllRefsByAddress = async (address: string) => {
  return await refModel.find({ refAddress: address })
}

/**
 * This function retrieves the current reference by address from a database using TypeScript.
 * @param {string} address - The `getCurrentRefByAddress` function is designed to retrieve a reference
 * by its address. The `address` parameter is a string that represents the address of the reference you
 * want to retrieve.
 * @returns The function `getCurrentRefByAddress` is returning the result of a database query using the
 * `findOne` method from the `refModel` that matches the provided `address`.
 */
export const getCurrentRefByAddress = async (
  address: string,
  refAddress: string | null
) => {
  const existingRef = await refModel.findOne({ address })

  if (!existingRef) {
    const newRef = new refModel({
      address,
      refAddress,
      createdAt: Math.floor(Date.now() / 1000)
    })
    await newRef.save()
    return newRef
  }

  if (existingRef && existingRef.refAddress) {
    return existingRef
  }

  if (!existingRef.refAddress && refAddress) {
    return await refModel.findOneAndUpdate(
      { address },
      { refAddress },
      { new: true, upsert: true }
    )
  }
}
