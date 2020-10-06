import axios from 'axios'

export default class Dev {
    public static test () {
      console.log('- 1: fetching Star Wars films in 5 seconds...')
      setTimeout(async () => {
        console.log('    - 2: fisrt film:')
        const first = await getFilms(1)
        console.log(first.data.title)
        
        console.log('    - 3: second film:')
        const second = await getFilms(2)
        console.log(second.data.title)
      }, 5000)

      console.log('// running in backgorund...')

      const getFilms = async (filmId: number) => {
        const axiosInstance = axios.create({
          baseURL: 'https://swapi.dev',
          }
        )
  
        console.log('      - making the call...')
        return await axiosInstance.get('/api/films/' + filmId)
      }
    }
}

// Dev.test()
