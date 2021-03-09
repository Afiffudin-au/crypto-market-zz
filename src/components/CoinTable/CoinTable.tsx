import { Table, Thead, Tbody, Tr, Th, Box, Text } from '@chakra-ui/react'
import CoinTableItem from './CoinTableItem'
import { useState } from 'react'
interface DataCoins {
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  symbol: string
}
const orderBy = (dataCoins: any, key: string, by: string) => {
  if (by === 'ascending') {
    return [...dataCoins].sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1))
  }
  if (by === 'descending') {
    return [...dataCoins].sort((a: any, b: any) => (a[key] > b[key] ? -1 : 1))
  }
  return dataCoins
}
function CoinTable({ dataCoins }: { dataCoins: Required<any> }) {
  const [key, setKey] = useState<string>('')
  const [by, setBy] = useState<string>('')
  const orderDataCoins = orderBy(dataCoins, key, by)
  const handleSort = (key: string) => {
    setKey(key)
    if (by === 'ascending') {
      setBy('descending')
    } else {
      setBy('ascending')
    }
  }
  return (
    <Box border='1px' borderColor='gray.300' borderRadius='8' padding='2'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th cursor='pointer' onClick={() => handleSort('name')}>
              <Text fontWeight='bold' color='black'>
                Name
              </Text>
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('current_price')}>
              <Text fontWeight='bold' color='black'>
                Price
              </Text>
            </Th>
            <Th
              cursor='pointer'
              onClick={() => handleSort('price_change_percentage_24h')}>
              <Text fontWeight='bold' color='black'>
                24h %
              </Text>
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('market_cap')}>
              <Text fontWeight='bold' color='black'>
                Market Cap
              </Text>
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('total_volume')}>
              <Text fontWeight='bold' color='black'>
                Total Volume
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderDataCoins?.map((item: DataCoins, index: number) => (
            <CoinTableItem
              index={index + 1}
              key={index}
              image={item.image}
              name={item.name}
              price={item.current_price}
              pricePercentage24h={item.price_change_percentage_24h}
              symbol={item.symbol}
              marketCap={item.market_cap}
              totalVolume={item.total_volume}
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
export default CoinTable
