const ul = document.getElementById("ul");

const num = prompt("Size of Array: ");
const Array = [];

for (let i = 0; i < num; i++) {
    let names = prompt(`enter value for index ${i}: `)
    Array.push(names);
}

for (let i = 0; i < Array.length; i++) {
    const li = document.createElement("li");
    const update = document.createElement("button");
    update.innerHTML = "Update";

    const del = document.createElement("button");
    del.innerHTML = "Delete";

    del.addEventListener("click", function () {
        ul.removeChild(li);
    })
    let flag = true;
    update.addEventListener("click", function () {

        if (flag == true) {
            const input = document.createElement("input");
            input.type = "text";
            li.appendChild(input);

            const saveBtn = document.createElement("button");
            saveBtn.innerHTML = "Save";
            li.appendChild(saveBtn);
            flag = false;
            saveBtn.addEventListener("click", function () {
                const newVal = input.value;
                li.innerHTML = newVal;
    
                Array[i] = newVal;
    
                li.appendChild(update);
                li.appendChild(del);
            })
        }
    })



    li.innerHTML = Array[i];
    li.appendChild(update);
    li.appendChild(del);

    ul.appendChild(li);
}