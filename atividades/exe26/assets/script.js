async function getApi(){
    const response = await fetch('https://gamerpower.p.rapidapi.com/api/filter?type=game&platform=epic-games-store.gog.origin.steam.ubisoft',
    {
        method:'GET',
        headers: {
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
            'x-rapidapi-key': 'bf34935081msh95c771a206e50b5p101be2jsnf09a1af5a137'
        }
    })

    const data = await response.json()
    if(response.status === 200){
        console.log(data);
        showInfo(data)
    }
}

const showInfo = (content) =>{
    const myData = content.map(({
        thumbnail,
        title,
        type,
        description,
        worth,
        platforms
    }) =>{
        return `
        <div class = "content">
        <img src ="${thumbnail}">
        <div class = "games-description">
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Price - ${worth}</p>
        <p>Type - ${type}</p>
        <p>Platforms - ${platforms}</p>
        </div>
        </div>`
    })

    document.querySelector("#content-area").innerHTML = myData
}


getApi();
