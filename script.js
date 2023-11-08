fetch("https://isro.vercel.app/api/spacecrafts")
    .then((response) => response.json())
    .then((data)=>{
        let spacescraft =data.spacecrafts
        document.getElementById("isro").innerHTML=spacescraft.map(
            (post) =>
            `<div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title text-center text-bg-info p-3">${post.id}</h5>
                    <p class="card-text text-center">${post.name}</p>
                </div>
            </div>`
        ).join("");;
    })
    .catch((err) =>{
        console.log("Error:",err);
    });