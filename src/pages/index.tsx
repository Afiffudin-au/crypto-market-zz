import { Box, Text } from '@chakra-ui/layout'
import { Fade, Spinner } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/progress'
import Head from 'next/head'
import { useState } from 'react'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import CoinTable from '../components/CoinTable/CoinTable'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import { Button } from '@chakra-ui/react'
export default function Home() {
  const [page, setPage] = useState<number>(1)
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    ['coins', page],
    () => getCoins(page),
    {
      staleTime: 3000, //ms
      refetchInterval: 3000,
    }
  )
  return (
    <div className={styles.home}>
      {isLoading && <Progress size='xs' />}
      {isError && <Text color='red.500'>Error</Text>}
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        {isFetching && (
          <Spinner color='blue.500' position='fixed' top='5' right='10' />
        )}
        {isSuccess && <CoinTable dataCoins={data} />}

        {!isLoading && (
          <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            mt='5'
            p='5'>
            <Button
              onClick={() => setPage((current) => current - 1)}
              disabled={page === 1 ? true : false}
              colorScheme='blue'
              size='sm'
              m='2'>
              Previous
            </Button>
            <Text fontWeight='bold' color='blue.500'>
              {page}
            </Text>
            <Button
              onClick={() => setPage((current) => current + 1)}
              colorScheme='blue'
              size='sm'
              m='2'>
              Next
            </Button>
          </Box>
        )}
      </Layout>
    </div>
  )
}
const getCoins = async (page = 1) => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=40&page=${page}`
  const response = await fetch(URL)
  return await response.json()
}
//SSR hydrate
export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['coins', 1], () => getCoins())
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
