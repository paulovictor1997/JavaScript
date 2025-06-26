const getApi = async () =>{
    const response = await fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-all-leagues",(
        {
          method: 'GET',
	      headers: {
		    'x-rapidapi-key': 'bf34935081msh95c771a206e50b5p101be2jsnf09a1af5a137',
		    'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	        }  
        }
    ))
    const data = await response.json()
    if(response.status === 200){
        console.log(data)
    }
}

getApi()