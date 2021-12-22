const url = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () =>{
    try{
        const data = await fetch(url);
        const json = await data.json();
        return json.webpurl;
    } catch(e){
       console.log(e.message); 
    }
}

const loadImg = async ()=>{
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadImg);

loadImg();