export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '09225d5214mshea4c19ab8a48e4cp1ac137jsn0040366f9a24',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
