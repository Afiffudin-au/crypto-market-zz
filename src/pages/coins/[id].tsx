import { Badge, Box, Flex, Link, List, Text } from '@chakra-ui/layout'
import styles from './coinsDetail.module.scss'
import {
  AiFillFacebook,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiFillStar,
  AiOutlineIssuesClose,
} from 'react-icons/ai/index'
import { ImTelegram } from 'react-icons/im/index'
import { Tag } from '@chakra-ui/tag'
import { BiGitRepoForked } from 'react-icons/bi/index'
import { MdSubscriptions } from 'react-icons/md/index'
import { VscIssues } from 'react-icons/vsc/index'
import { Image } from '@chakra-ui/image'
import { FiExternalLink } from 'react-icons/fi/index'
interface DevelopersData {
  closed_issues: number
  forks: number
  stars: number
  subscribers: number
  total_issues: number
}
interface CommunityData {
  facebook_likes: number
  reddit_subscribers: number
  telegram_channel_user_count: number
  twitter_followers: number
}
const numberFormat = (num: number) => {
  return num?.toLocaleString() || 0
}
function CoinsDetail({ dataCoins }: any) {
  const community_data: CommunityData = dataCoins.community_data
  const developer_data: DevelopersData = dataCoins.developer_data
  console.log(dataCoins)
  return (
    <div className={styles.dataCoins}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gridGap='5px'
        alignItems='stretch'>
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
        <Box border='1px solid #b0bec5' borderRadius='sm' padding='2'>
          <Tag colorScheme='blue'>Developers</Tag>
          <Flex alignItems='center' mb='5px' gridGap='5px'>
            <Box>
              <BiGitRepoForked />
            </Box>
            <Text>forks</Text>
            <Badge colorScheme='cyan'>
              {numberFormat(developer_data.forks)}
            </Badge>
          </Flex>
          <Flex alignItems='center' mb='5px' gridGap='5px'>
            <Box>
              <AiFillStar />
            </Box>
            <Text>stars</Text>
            <Badge colorScheme='cyan'>
              {numberFormat(developer_data.stars)}
            </Badge>
          </Flex>
          <Flex alignItems='center' mb='5px' gridGap='5px'>
            <Box>
              <MdSubscriptions />
            </Box>
            <Text>subscriptions</Text>
            <Badge colorScheme='cyan'>
              {numberFormat(developer_data.subscribers)}
            </Badge>
          </Flex>
          <Flex alignItems='center' mb='5px' gridGap='5px'>
            <Box>
              <VscIssues />
            </Box>
            <Text>total Issues</Text>
            <Badge colorScheme='cyan'>
              {numberFormat(developer_data.total_issues)}
            </Badge>
          </Flex>
          <Flex alignItems='center' mb='5px' gridGap='5px'>
            <Box>
              <AiOutlineIssuesClose />
            </Box>
            <Text>tssues closed</Text>
            <Badge colorScheme='cyan'>
              {numberFormat(developer_data.closed_issues)}
            </Badge>
          </Flex>
        </Box>
        <Box border='1px solid #b0bec5' borderRadius='sm' padding='2'>
          <Tag colorScheme='blue'>blockchain sites</Tag>
          <Flex flexDirection='column'>
            {dataCoins.links.blockchain_site.map((item: any, index: number) => (
              <>
                {item && (
                  <Link
                    key={index}
                    _hover={{ color: '#42a5f5' }}
                    display='flex'
                    alignItems='center'
                    mb='5px'
                    href={item}
                    isExternal>
                    site {index + 1}
                    <FiExternalLink />
                  </Link>
                )}
              </>
            ))}
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}
export const getServerSideProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const dataCoins = await res.json()
  return {
    props: {
      dataCoins,
    },
  }
}
export default CoinsDetail
