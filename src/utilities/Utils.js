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
