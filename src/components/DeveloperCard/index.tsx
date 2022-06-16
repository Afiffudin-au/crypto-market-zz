import React from 'react'
import { Badge, Box, Flex, Text } from '@chakra-ui/layout'
import styles from './coinsDetail.module.scss'
import { AiFillStar, AiOutlineIssuesClose } from 'react-icons/ai/index'
import { Tag } from '@chakra-ui/tag'
import { BiGitRepoForked } from 'react-icons/bi/index'
import { MdSubscriptions } from 'react-icons/md/index'
import { VscIssues } from 'react-icons/vsc/index'
import numberFormat from '../../numberFormat/numberFormat'
interface DevelopersData {
  closed_issues: number
  forks: number
  stars: number
  subscribers: number
  total_issues: number
}

function DeveloperCard({ dataCoins }: { dataCoins: Required<any> }) {
  const developer_data: DevelopersData = dataCoins.developer_data
  return (
    <Box border='1px solid #b0bec5' borderRadius='sm' padding='2'>
      <Tag colorScheme='blue'>Developers</Tag>
      <Flex alignItems='center' mb='5px' gridGap='5px'>
        <Box>
          <BiGitRepoForked />
        </Box>
        <Text>forks</Text>
        <Badge colorScheme='cyan'>{numberFormat(developer_data.forks)}</Badge>
      </Flex>
      <Flex alignItems='center' mb='5px' gridGap='5px'>
        <Box>
          <AiFillStar />
        </Box>
        <Text>stars</Text>
        <Badge colorScheme='cyan'>{numberFormat(developer_data.stars)}</Badge>
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
  )
}

export default DeveloperCard
