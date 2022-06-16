import { Box, Flex, Link } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi/index'
function BlockChainSites({ dataCoins }: { dataCoins: Required<any> }) {
  return (
    <Box border='1px solid #b0bec5' borderRadius='sm' padding='2'>
      <Tag colorScheme='blue'>blockchain sites</Tag>
      <Flex flexDirection='column'>
        {dataCoins.links.blockchain_site.map(
          (item: any, index: number) =>
            item && (
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
            )
        )}
      </Flex>
    </Box>
  )
}

export default BlockChainSites
