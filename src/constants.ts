import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
  97: '0xaD1E6bD51A36df51B8CBbc277AF96AA06D691e55',
}

export const INIT_CODE_HASH = '0xbf7585cde4f408809b6c163843c70455db804dcbba556f99313c4ab4ce8c6346'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
