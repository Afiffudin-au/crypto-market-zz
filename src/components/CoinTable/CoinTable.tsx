import { Table, Thead, Tbody, Tr, Th, Box, Text } from '@chakra-ui/react'
import CoinTableItem from './CoinTableItem'
import { useState } from 'react'
import { BiSort } from 'react-icons/bi'
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
const TextItem = ({ label, icon = true }: any) => {
  return (
    <Text fontWeight='bold' color='black' display='flex' alignItems='center'>
      {label}
      {icon && <BiSort style={{ color: '#2b6cb0', marginLeft: '5px' }} />}
    </Text>
  )
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
    <Box border='1px' borderColor='gray.300' borderRadius='8'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th cursor='pointer'>
              <TextItem label='#' icon={false} />
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('name')}>
              <TextItem label='name' />
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('current_price')}>
              <TextItem label='price' />
            </Th>
            <Th
              cursor='pointer'
              onClick={() => handleSort('price_change_percentage_24h')}>
              <TextItem label='24h %' />
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('market_cap')}>
              <TextItem label='Market Cap' />
            </Th>
            <Th cursor='pointer' onClick={() => handleSort('total_volume')}>
              <TextItem label='Total Volume' />
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
