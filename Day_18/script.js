// step 1: create new element : div
const newCard = document.createElement("div");
newCard.className = "card";

// step 2: change innerHTML
newCard.innerHTML = `<img src="https://cloud-computing-lectures-likhilesh-abcdxyz.s3.ap-sout
h-1.amazonaws.com/likhi-laptop.jpg" />
            <div class="product-info">
                <h4>Macbook Pro M1 - 2022</h4>
                <p>Price: $1100</p>
                <p>Rating: 4.9⭐️ </p>
            </div>`;

// step 3: find out the parent
const parent = document.getElementById("root");

// step 4: append the child
parent.appendChild(newCard);
