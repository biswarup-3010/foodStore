const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    // Header logo
    document.getElementById("logo-container").innerHTML = `
      <img src="${data.headerData[0].link}" alt="Food Store Logo" class="Food-logo" />
      <p class="test">FOOD STORE &reg;</p>
    `;

    // Home image
    document.getElementById("home-image").innerHTML = `
      <img src="${data.bodyData[0].link}" alt="Burger" />
    `;

    // About images
    document.getElementById("knife-icon-container").innerHTML = `
      <img src="${data.aboutPage[0].link}" alt="Knife Icon" />
    `;
    document.getElementById("image-box").innerHTML = `
      <img src="${data.aboutPage[1].link}" alt="Delicious Food" class="image" />
    `;

    // Recipes
    const recipeList = document.getElementById("recipe-list");
    data.recipePage.forEach((recipe) => {
      recipeList.innerHTML += `
        <div class="recipe">
          <img src="${recipe.link}" alt="Recipe Image" /><br />
          <h3 style="color:yellow">${recipe.heading}</h3>
          <br/>
          <p>$${Math.floor(Math.random() * 50) + 10}</p>
        </div>
      `;
    });

    // Blog
    document.getElementById(
      "extradata"
    ).innerHTML += `<img src="${data.aboutPage[0].link}" style="height:180px;" alt="Knife Icon" />`;

    const blogList = document.getElementById("blog-list");

    data.blogPage.forEach((blog) => {
      blogList.innerHTML += `
    <div class="food-card">
      <div class="date">02 FEB 2019</div>
      <img src="${blog.link}" alt="Blog Image" />
      <h3 style="color:orange">${blog.heading}</h3>
      <p class="book-style">${blog.desc}</p>
    </div>
  `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
