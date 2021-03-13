import { Flex } from '@chakra-ui/layout'
import styles from './coinsDetail.module.scss'
import { Image } from '@chakra-ui/image'
import CommunityCard from '../../components/CommunityCard/CommunityCard'
import DeveloperCard from '../../components/DeveloperCard/DeveloperCard'
import BlockChainSites from '../../components/BlockChainSites/BlockChainSites'

function CoinsDetail({ dataCoins }: any) {
  console.log(dataCoins)
  return (
    <div className={styles.dataCoins}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gridGap='5px'
        alignItems='stretch'>
        <Image
          src={dataCoins.image.large}
          alt={dataCoins.image.large}
          width={200}
          objectFit='fill'
          display='block'
          mx={{ base: 'auto', sm: '0' }}
        />
        <CommunityCard dataCoins={dataCoins} />
        <DeveloperCard dataCoins={dataCoins} />
        <BlockChainSites dataCoins={dataCoins} />
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
