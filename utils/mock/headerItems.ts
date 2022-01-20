import { IHeaderItem } from "../../models"
import { ImHome3 } from 'react-icons/im'
import { HiUsers } from 'react-icons/hi'
import { BsFillBellFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { FaBriefcase } from 'react-icons/fa'

export const headerItems: IHeaderItem[] = [
  {
    title: 'Home',
    Icon: ImHome3,
    to: '/'
  },


  {
    title: 'My Network',
    Icon: HiUsers,
    to: '/net'
  },

  {
    title: 'Jobs',
    Icon: FaBriefcase,
    to: '/jobs'
  },

  {
    title: 'Messaging',
    Icon: BiMessageDetail,
    to: '/messaging'
  },

  {
    title: 'Notifications',
    Icon: BsFillBellFill,
    to: '/notifications'
  },


]