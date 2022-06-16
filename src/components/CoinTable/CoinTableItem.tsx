import { Tr, Td, Text, Box, Image } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useRouter } from 'next/dist/client/router'
interface CoinTableItems {
  id: string
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
          <IoMdArrowDropup />
          {formatPercent}
        </>
      ) : (
        <>
          <IoMdArrowDropdown />
          {formatPercent}
        </>
      )}
    </Text>
  )
}

function CoinTableItem({
  id,
  index,
  image,
  name,
  symbol,
  price,
  pricePercentage24h,
  marketCap,
  totalVolume,
}: Required<CoinTableItems>) {
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const router = useRouter()
  const handleDetail = () => {
    router.push(`/coins/${id}`)
  }
  const handleImageLoad = useCallback(() => {
    setImageLoad(true)
    setDisplay('block')
  }, [imageLoad, display])

  return (
    <>
      <Tr onClick={handleDetail} cursor='pointer' borderColor='blue.800'>
        <Td>
          <Text fontSize='sm' fontWeight='bold' color='blue.600'>
            {index}
          </Text>
        </Td>
        <Td>
          <Box display='flex' alignItems='center' boxSize='24px'>
            {!imageLoad && (
              <Image src={'/25x25.png'} alt={name} marginRight='5px' />
            )}
            <Image
              onLoad={handleImageLoad}
              display={display}
              src={image}
              alt={name}
              marginRight='5px'
            />

            <Text
              fontWeight='semibold'
              fontSize={{ base: '12px', sm: '14px' }}
              marginRight='5px'>
              {name}
            </Text>
            <Text
              whiteSpace='nowrap'
              textTransform='uppercase'
              fontWeight='semibold'
              fontSize={{ base: '12px', sm: '14px' }}
              color='rgb(128, 138, 157)'>
              {symbol}
            </Text>
          </Box>
        </Td>
        <Td>
          <Text
            whiteSpace='nowrap'
            fontSize={{ base: '12px', sm: '14px' }}
            fontWeight='bold'>
            {formatNumber(price)}
          </Text>
        </Td>
        <Td display={{ base: 'none', sm: 'none', md: 'table-cell' }}>
          <Percentage percent={pricePercentage24h} />
        </Td>
        <Td display={{ base: 'none', sm: 'none', lg: 'table-cel' }}>
          <Text whiteSpace='nowrap' fontSize='14px' fontWeight='bold'>
            {formatNumber(marketCap)}
          </Text>
        </Td>
        <Td display={{ base: 'none', sm: 'none', lg: 'table-cell' }}>
          <Text whiteSpace='nowrap' fontSize='14px' fontWeight='bold'>
            {formatNumber(totalVolume)}
          </Text>
        </Td>
      </Tr>
    </>
  )
}

export default CoinTableItem
