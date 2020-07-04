import { ViewerQuery } from './data/data-name'
import { initializeApollo, apolloClient } from './apollo/client'
import { Box, Spinner, ThemeProvider } from '@chakra-ui/core'

export default function () {
  // const { data } = useQuery(ViewerQuery, { variables: { first: 2 } })

  // if (!data || !data.viewer) return null

  // const unique = {}
  // data.forEach(function (gpa) {
  //   unique[JSON.stringify(gpa)] = gpa
  // })

  // const list = Object.keys(unique).map(function (u) {
  //   return JSON.parse(u)
  // })

  return (
    <>

      <ThemeProvider>
        <Box>ghtgdf</Box>
      </ThemeProvider>
    </>
    // <Box d='flex' justifyContent='center' overflow='auto'>
    //   {list.map((item, i) => (
    //     <Box key={i} mb={5}>
    //       {item.name}
    //     </Box>
    //   ))}
    // </Box>

  )
}

// export async function getStaticProps () {
//   await apolloClient.query({
//     query: ViewerQuery
//   })
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     }
//   }
// }
