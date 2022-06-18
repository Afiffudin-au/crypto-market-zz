import { Table, Thead, Tbody, Tr, Th, Box, Text } from '@chakra-ui/react'
import CoinTableItem from './CoinTableItem'
import { useMemo, useState } from 'react'
import { BiSort } from 'react-icons/bi'
interface DataCoins {
  id: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  symbol: string
}
const orderBy = (dataCoins: any, key: string, direction: string | null) => {
  if (direction === 'ascending') {
    return [...dataCoins].sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1))
  }
  if (direction === 'descending') {
    return [...dataCoins].sort((a: any, b: any) => (a[key] > b[key] ? -1 : 1))
  }
  return dataCoins
}
const TextItem = ({ label, icon = true }: any) => {
  return (
    <Text fontWeight='bold' color='black' display='flex' alignItems='center'>
      {label}
      {icon && <BiSort style={{ color: '#2b6cb0', marginLeft: '5px' }} />}
    </Text>
  )
}
function CoinTable({ dataCoins }: { dataCoins: Required<any> }) {
  const [direction, setDirection] = useState<string | null>('')
  const [key, setKey] = useState('')
  const orderedCoins = orderBy(dataCoins, key, direction)
  const switchDirection = () => {
    if (!direction) {
      setDirection('descending')
    } else if (direction === 'descending') {
      setDirection('ascending')
    } else {
      setDirection(null)
    }
  }
  const setKeyAndDirection = (value: string) => {
    switchDirection()
    setKey(value)
  }
  const memoizedCoins = useMemo(() => {
    return orderedCoins?.map((item: DataCoins, index: number) => (
      <CoinTableItem
        id={item.id}
        index={index + 1}
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.current_price}
        pricePercentage24h={item.price_change_percentage_24h}
        symbol={item.symbol}
        marketCap={item.market_cap}
        totalVolume={item.total_volume}
      />
    ))
  }, [orderedCoins, key, direction])
  return (
    <Box border='1px' borderColor='gray.300' borderRadius='8'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th cursor='pointer'>
              <TextItem label='#' icon={false} />
            </Th>
            <Th cursor='pointer' onClick={() => setKeyAndDirection('name')}>
              <TextItem label='name' />
            </Th>
            <Th
              cursor='pointer'
              onClick={() => setKeyAndDirection('current_price')}>
              <TextItem label='price' />
            </Th>
            <Th
              display={{ base: 'none', sm: 'none', md: 'table-cell' }}
              cursor='pointer'
              onClick={() => setKeyAndDirection('price_change_percentage_24h')}>
              <TextItem label='24h %' />
            </Th>
            <Th
              display={{ base: 'none', sm: 'none', lg: 'table-cell' }}
              cursor='pointer'
              onClick={() => setKeyAndDirection('market_cap')}>
              <TextItem label='Market Cap' />
            </Th>
            <Th
              display={{ base: 'none', sm: 'none', lg: 'table-cel' }}
              cursor='pointer'
              onClick={() => setKeyAndDirection('total_volume')}>
              <TextItem label='Total Volume' />
            </Th>
          </Tr>
        </Thead>
        <Tbody>{memoizedCoins}</Tbody>
      </Table>
    </Box>
  )
}
export default CoinTable
