import mockAxios from 'axios'
import Dev from '../src/Dev'

describe('@/Dev.ts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should have a dev class with a test method', async (done) => {
    jest.useFakeTimers()

    mockAxios.get.mockImplementationOnce((url) => {
      console.log(url)
      const title = 'SW film ' + url.substr(url.length - 1)
      return Promise.resolve({ 
        status: 200, 
        data: {
          title: title
        }
      })
    })

    console.log('- calling the method')
    Dev.test()
    
    console.log('run timers')
    jest.runAllTimers()

    console.log(' - 4: Done!')
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    expect(mockAxios.get.mock.calls[0][0]).toEqual('/api/films/1')
    expect(mockAxios.get.mock.calls[1][0]).toEqual('/api/films/2')

    done()
  })

  it.skip('should have a dev class with a test method that works', async (done) => {
    // Function to end all the promises pending: https://stackoverflow.com/a/58716087/5625148
    function flushPromises() {
      return new Promise(resolve => setImmediate(resolve))
    }

    jest.useFakeTimers()

    mockAxios.get.mockImplementation((url) => { // Not mockImplementationOnce!
      console.log(url)
      const title = 'SW film ' + url.substr(url.length - 1)
      return Promise.resolve({ 
        status: 200, 
        data: {
          title: title
        }
      })
    })

    console.log('calling the method')
    Dev.test()
    
    console.log('run timers')
    jest.runAllTimers()

    await flushPromises()

    console.log('done!')
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    expect(mockAxios.get.mock.calls[0][0]).toEqual('/api/films/1')
    expect(mockAxios.get.mock.calls[1][0]).toEqual('/api/films/2')

    done()
  })
})
