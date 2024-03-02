// Data
const data = [
  {
    title: "this is card title1",
    body: "this is card body1",
  },
  {
    title: "this is card title2",
    body: "this is card body2",
  },
  {
    title: "this is card title3",
    body: "this is card body3",
  },
  {
    title: "this is card title4",
    body: "this is card body4",
  },
  {
    title: "this is card title5",
    body: "this is card body5",
  },
  {
    title: "this is card title6",
    body: "this is card body6",
  },
  {
    title: "this is card title7",
    body: "this is card body7",
  },
  {
    title: "this is card title8",
    body: "this is card body8",
  },
];


const fetchData = async (config)=>{
        const res = await axios(config)
        return res.data 
}

// selection
const posts = document.querySelector(".posts");

const loadAllData = async () => {
    const allData = await fetchData("https://jsonplaceholder.typicode.com/posts")
  allData.map((post) => {
    const singlePost = document.createElement("div");
    singlePost.classList.add("post");
    singlePost.innerHTML = `
          <h4 class="post-tile">${post.title}</h4>
          <p class="post-body">${post.body}</p>
        `;
    posts.appendChild(singlePost);
  });
};
loadAllData()