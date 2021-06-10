import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '@refetty/react'
import { addDays, subDays, format } from 'date-fns'
import axios from 'axios'

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  IconButton,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react'

import { formatDate, Logo, TimeBlock } from '../components'

const getSchedule = async ({ when, username }) =>
  axios({
    method: 'get',
    url: '/api/schedule',
    params: {
      username,
      date: format(when, 'yyyy-MM-dd'),
    },
  })

const Header = ({ children }) => (
  <Box p={4} display="flex" alignItems="center" justifyContent="space-between">
    {children}
  </Box>
)

export default function Schedule() {
  const router = useRouter()
  const [when, setWhen] = useState(() => new Date())
  const [data, { loading, error }, fetch] = useFetch(getSchedule, {
    lazy: true,
  })

  const backwardDay = () => setWhen((prevState) => subDays(prevState, 1))
  const forwardDay = () => setWhen((prevState) => addDays(prevState, 1))

  const refresh = () => {
    fetch({ when, username: router.query.username })
  }

  // When 'when' or 'username' changes, executes fetch()
  useEffect(() => {
    refresh()
  }, [when, router.query.username])

  if (error) {
    console.log('ERROR: Invalid route')
    // Treat error
  }

  return (
    <Container>
      <Header>
        <Logo size={150} />
      </Header>

      <Box mt={8} display="flex" alignItems="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          bg="transparent"
          onClick={backwardDay}
        />
        <Box flex={1} textAlign="center">
          {formatDate(when, 'PPPP')}
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          bg="transparent"
          onClick={forwardDay}
        />
      </Box>

      <SimpleGrid p={4} columns={2} spacing={4}>
        {loading && (
          <Spinner
            tickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {data?.map(({ time, isBlocked }) => (
          <TimeBlock
            key={time}
            time={time}
            date={when}
            disabled={isBlocked}
            onSuccess={refresh}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
