// Modal

function openModal() {
    const modalItem = document.querySelector("#modalController_" + modalValue).nextElementSibling;
    const modalItemClone = modalItem.cloneNode(true);
    modalItemClone.lastElementChild.style.display = "none";
    modalItemClone.classList.add("modalItem");

    const modalContainer = document.querySelector("#modalContainer_" + modalValue);
    modalContainer.prepend(modalItemClone);
}

function closeModal() {
    const modal = document.querySelector("#modalController_" + modalValue);
    const modalItem = document.querySelector("#modalContainer_" + modalValue).firstElementChild;
    const btn = document.querySelector("#btn-closemodal_" + modalValue);
    btn.addEventListener("click", () => {
        modalItem.remove();
        modal.close();
    })

    btn.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
            modalItem.remove();
            modal.close();
        }
    })
}

function handleModal() {
    const modal = document.querySelector("#modalController_" + modalValue);
    openModal();
    modal.showModal();
    closeModal();
}

let modalValue;
let btns = document.querySelectorAll('.postslist-article-div__btn');
for (let x = 0; x < btns.length; x++) {
    btns[x].addEventListener("click", function (e) {
        if (e.target.id == "btn-openpost_1") {
            modalValue = "1";
            handleModal();
        } else if (e.target.id == "btn-openpost_2") {
            modalValue = "2";
            handleModal();
        } else if (e.target.id == "btn-openpost_3") {
            modalValue = "3";
            handleModal();
        }
    })
}

// Like

function likeFunc() {
    const like = document.querySelectorAll(".heart__img");
    for(let x = 0; x < like.length; x++){
        like[x].addEventListener("click", () => {
            if (like[x].src.includes("gray-heart.svg")) {
                like[x].src = "./src/assets/img/red-heart.svg";
                like[x].nextElementSibling.innerHTML = parseInt(like[x].nextElementSibling.innerHTML) + 1;

            } else {
                like[x].src = "./src/assets/img/gray-heart.svg";
                like[x].nextElementSibling.innerHTML = parseInt(like[x].nextElementSibling.innerHTML) - 1;
            }
        });
    }
}

likeFunc();

// Follow

function followFunc(){
    const follow = document.querySelectorAll(".newpost-right-ul-li__btn");
    for(let x = 0; x < follow.length; x++){
        follow[x].addEventListener("click", () => {
            if (follow[x].innerHTML == "Seguir") {
                follow[x].innerHTML = "Seguindo"
            } else {
                follow[x].innerHTML = "Seguir"
            }
        });
    }
}

followFunc();