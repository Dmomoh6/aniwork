import axios from 'axios'

export default function ({ $config }, inject) {
  const headers = {
    'X-RapidAPI-Host': $config.rapidApi.host,
    'X-RapidAPI-Key': $config.rapidApi.key,
  }

  inject('jobSearchApi', {
    getJobs,
  })

  async function getJobs(query) {
    const options = {
      method: 'GET',
      url: $config.rapidApi.url,
      params: { query },
      headers,
    }

    const jobs = await axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        return response.data.data
      })
      .catch(function (error) {
        alert(error + ' please retry')
        return null
      })

    return jobs
  }
}
