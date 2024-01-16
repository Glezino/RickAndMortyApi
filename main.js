const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    document.getElementById("resultado").innerHTML = "";
    divRes = document.querySelector("#resultado");
    data.results.map(item => {
      divItem = document.createElement('div');
      const statusClass = item.status.toLowerCase();
      divItem.innerHTML = `<div class="card">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><b>${item.name}</b></h5>
                <p class="card-text _status ${statusClass}">${item.status}</p>
                <p class="card-text"><b>Species: </b><br>${item.species}</p>
                <p class="card-text"><b>Gender: </b><br>${item.gender}</p>
                <p class="card-text"><b>Origin: </b><br>${item.origin.name}</p>
            </div>
        </div>`;
  
      divRes.appendChild(divItem);
    });
  };
  
  apiRick(1);