import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Hami Swap',
  description:
    'The most popular AMM on BSC by user count! Earn HAMI through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HAMI), NFTs, and more, on a platform you can trust.',
  image: 'https://swap.hami.live/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Hami Swap - Home')}`,
      }
    case '/games':
      return {
        title: `${t('Games')} | ${t('Hami Swap - Games')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Hami Swap Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Hami Swap Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Staking')} | ${t('Hami Swap Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Hami Swap Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Hami Swap Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Hami Swap Finance')}`,
      }
    case '/referral':
      return {
        title: `${t('Referral')} | ${t('Hami Swap Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Hami Swap Finance')}`,
      }
    case '/nft':
      return {
        title: `${t('NFT')} | ${t('Hami Swap Finance')}`,
      }
    default:
      return null
  }
}
