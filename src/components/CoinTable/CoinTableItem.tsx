import { Tr, Td, Text, Box, Image } from '@chakra-ui/react'
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
interface CoinTableItems {
  index: number
  image: string
  name: string
  symbol: string
  price: number
  pricePercentage24h: number
  marketCap: number
  totalVolume: number
}
const formatNumber = (num: number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}
const Percentage = ({ percent }: { percent: number }) => {
  const formatPercent = Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(percent / 100)
  let color = 'black'
  if (percent > 0) {
    color = 'green.500'
  } else if (percent < 0) {
    color = 'red.500'
  }
  return (
    <Text color={color} fontSize='14px' fontWeight='bold'>
      {color === 'green.500' ? (
        <>
          <ArrowDropUpIcon />
          {formatPercent}
        </>
      ) : (
        <>
          <ArrowDropDownIcon />
          {formatPercent}
        </>
      )}
    </Text>
  )
}
function CoinTableItem({
  index,
  image,
  name,
  symbol,
  price,
  pricePercentage24h,
  marketCap,
  totalVolume,
}: Required<CoinTableItems>) {
  return (
    <>
      <Tr cursor='pointer' borderColor='blue.800'>
        <Td>
          <Text fontSize='sm' fontWeight='bold' color='blue.600'>
            {index}
          </Text>
        </Td>
        <Td>
          <Box display='flex' alignItems='center' boxSize='24px'>
            <Image src={image} alt={name} marginRight='5px' />
            <Text fontWeight='semibold' fontSize='14px' marginRight='5px'>
              {name}
            </Text>
            <Text
              whiteSpace='nowrap'
              textTransform='uppercase'
              fontWeight='semibold'
              fontSize='14px'
              color='rgb(128, 138, 157)'>
              {symbol}
            </Text>
          </Box>
        </Td>
        <Td>
          <Text whiteSpace='nowrap' fontSize='14px' fontWeight='bold'>
            {formatNumber(price)}
          </Text>
        </Td>
        <Td>
          <Percentage percent={pricePercentage24h} />
        </Td>
        <Td>
          <Text whiteSpace='nowrap' fontSize='14px' fontWeight='bold'>
            {formatNumber(marketCap)}
          </Text>
        </Td>
        <Td>
          <Text whiteSpace='nowrap' fontSize='14px' fontWeight='bold'>
            {formatNumber(totalVolume)}
          </Text>
        </Td>
      </Tr>
    </>
  )
}

export default CoinTableItem
