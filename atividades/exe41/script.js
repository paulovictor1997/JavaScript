 const object = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "images/icon-visual.svg"
    }
  ]

  const showInfo = (content) =>{
    const myData = content.map(({
      category,
      score,
      icon
    }) =>{
        return `
       <div class="statistic">
        <div class="icon">
          <img src="${icon}" alt="icon-svg">
          <h3>${category}</h3>
        </div>
        <div class="info-3">
          ${score} <span>/ 100</span>
        </div>
      </div>
      
        `
    })

    document.querySelector("#content").innerHTML = myData
}

showInfo(object)