export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5d5659bdddmshbd9cc19d5679af4p103cc1jsn52be6866f1b1',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
