import { Yam } from '../../yam'

const getCurrentPrice = async (yam: typeof Yam): Promise<number> => {
  // FORBROCK: get current YAM price
  return 0
}

const getTargetPrice = async (yam: typeof Yam): Promise<number> => {
  // FORBROCK: get target YAM price
  return 0
}

const getCirculatingSupply = async (yam: typeof Yam): Promise<number> => {
  // FORBROCK: get circulating supply
  return 0
}

const getNextRebaseTimestamp = async (yam: typeof Yam): Promise<number> => {
  // FORBROCK: get next rebase timestamp
  return 0
}

const getTotalSupply = async (yam: typeof Yam): Promise<number> => {
  // FORBROCK: get total supply
  return 0
}

export const getStats = async (yam: typeof Yam) => {
  const curPrice = await getCurrentPrice(yam)
  const circSupply = await getCirculatingSupply(yam)
  const nextRebase = await getNextRebaseTimestamp(yam)
  const targetPrice = await getTargetPrice(yam)
  const totalSupply = await getTotalSupply(yam)
  return {
    circSupply,
    curPrice,
    nextRebase,
    targetPrice,
    totalSupply
  }
}
