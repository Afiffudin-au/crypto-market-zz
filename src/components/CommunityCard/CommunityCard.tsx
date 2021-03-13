import { Box, Tag, Flex, Text, Badge } from '@chakra-ui/react'
import React from 'react'
import { ImTelegram } from 'react-icons/im/index'
import {
  AiFillFacebook,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from 'react-icons/ai/index'
import numberFormat from '../../numberFormat/numberFormat'
interface CommunityData {
  facebook_likes: number
  reddit_subscribers: number
  telegram_channel_user_count: number
  twitter_followers: number
}
function CommunityCard({ dataCoins }: { dataCoins: Required<any> }) {
  const community_data: CommunityData = dataCoins.community_data
  return (
    <Box borderRadius='sm' border='1px solid #b0bec5' padding='2'>
      <Tag mb='5px' colorScheme='blue'>
        Community
      </Tag>
      <Flex gridGap='5px' mb='5px' alignItems='center'>
        <Box color='#0288d1'>
          <AiFillFacebook size={25} />
        </Box>
        <Text color='#03a9f4'>likes :</Text>
        <Badge variant='solid' colorScheme='blue'>
          {numberFormat(community_data.facebook_likes)}
        </Badge>
      </Flex>
      <Flex gridGap='5px' mb='5px' alignItems='center'>
        <Box color='#ff7043'>
          <AiFillRedditCircle size={25} />
        </Box>
        <Text color='#03a9f4'>reddit subscribers :</Text>
        <Badge variant='solid' colorScheme='orange'>
          {numberFormat(community_data.reddit_subscribers)}
        </Badge>
      </Flex>
      <Flex gridGap='5px' mb='5px' alignItems='center'>
        <Box color='#64b5f6'>
          <AiFillTwitterCircle size={25} />
        </Box>
        <Text color='#03a9f4'>telegram channel user :</Text>
        <Badge variant='solid' colorScheme='blue'>
          {numberFormat(community_data.telegram_channel_user_count)}
        </Badge>
      </Flex>
      <Flex gridGap='5px' mb='5px' alignItems='center'>
        <Box color='#42a5f5'>
          <ImTelegram size={25} />
        </Box>
        <Text color='#03a9f4'>twitter followers :</Text>
        <Badge variant='solid' colorScheme='blue'>
          {numberFormat(community_data.twitter_followers)}
        </Badge>
      </Flex>
    </Box>
  )
}

export default CommunityCard
