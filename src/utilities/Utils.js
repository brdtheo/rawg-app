import React from 'react'
import { Text } from 'react-native'
import NintendoIcon from '../components/icons/NintendoIcon'
import WindowsIcon from '../components/icons/WindowsIcon'
import PlaystationIcon from '../components/icons/PlaystationIcon'
import XboxIcon from '../components/icons/XboxIcon'
import PhoneIcon from '../components/icons/PhoneIcon'
import AndroidIcon from '../components/icons/AndroidIcon'
import LinuxIcon from '../components/icons/LinuxIcon'
import AppleIcon from '../components/icons/AppleIcon'
import GlobeIcon from '../components/icons/GlobeIcon'
import AtariIcon from '../components/icons/AtariIcon'
import SegaIcon from '../components/icons/SegaIcon'
import CommodoreIcon from '../components/icons/CommodoreIcon'
import ThreeDOIcon from '../components/icons/ThreeDOIcon'
import EpicGamesIcon from '../components/icons/EpicGamesIcon'
import SteamIcon from '../components/icons/SteamIcon'
import AppstoreIcon from '../components/icons/AppstoreIcon'
import GogIcon from '../components/icons/GogIcon'
import PlaystoreIcon from '../components/icons/PlaystoreIcon'
import ItchIcon from '../components/icons/ItchIcon'
import { tailwind } from '../../tailwind'

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-EN').format(number)
}

export const getIcon = (platform) => {
  switch (platform) {
    case 'Xbox':
      return <XboxIcon size={14} />
    case 'PlayStation':
      return <PlaystationIcon size={16} />
    case 'PC':
      return <WindowsIcon size={13} />
    case 'iOS':
      return <PhoneIcon size={15} />
    case 'Android':
      return <AndroidIcon size={16} />
    case 'Web':
      return <GlobeIcon size={14} />
    case 'Apple Macintosh':
      return <AppleIcon size={15} />
    case 'Linux':
      return <LinuxIcon size={16} />
    case 'Nintendo':
      return <NintendoIcon size={16} />
    case 'SEGA':
      return <SegaIcon size={16} />
    case 'Atari':
      return <AtariIcon size={16} />
    case 'Commodore / Amiga':
      return <CommodoreIcon size={16} />
    case '3DO':
      return <ThreeDOIcon size={16} />
    default:
      return <Text style={tailwind('text-white')}>{platform}</Text>
  }
}

export const getStoreIcon = (store) => {
  switch (store) {
    case 'xbox360':
      return <XboxIcon size={14} />
    case 'gog':
      return <GogIcon size={17} />
    case 'xbox-store':
      return <XboxIcon size={14} />
    case 'playstation-store':
      return <PlaystationIcon size={17} />
    case 'epic-games':
      return <EpicGamesIcon size={17} />
    case 'steam':
      return <SteamIcon size={15} />
    case 'nintendo':
      return <NintendoIcon size={17} />
    case 'apple-appstore':
      return <AppstoreIcon size={15} />
    case 'google-play':
      return <PlaystoreIcon size={15} />
    case 'itch':
      return <ItchIcon size={24} />
    default:
      return <Text style={tailwind('text-white')}>{store}</Text>
  }
}

export const getScoreColor = (score) => {
  const parsedScore = parseInt(score)

  if (!score) {
    console.error('cannot return score color: no score provided')
  }

  if (parsedScore > 50 && parsedScore < 75) {
    return '#FDCA52'
  } else if (parsedScore >= 75) {
    return '#44BD49'
  } else {
    return '#fff'
  }
}
