const BASE_URL = 'https://thatcopy.github.io/catAPI/imgs/jpg/2b74f7c.jpg';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res)=> res.json())
    .catch((e) => console.log(e));

    return data.webpurl;
 };

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

