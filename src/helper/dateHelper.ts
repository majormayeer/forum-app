import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

const diffForHumans = (timestamp: number) => {
  return dayjs.unix(timestamp).fromNow()
}

const humanFriendlyDate = (timestamp: number) => {
  return dayjs.unix(timestamp).format('llll')
}

export { diffForHumans, humanFriendlyDate }
