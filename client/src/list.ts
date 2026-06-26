type Student = {
    id: string,
    fname: string,
    lname: string,
    favg: number
}

export async function initList() {
    const container = document.querySelector(".list-container") as HTMLDivElement;
    if (!container) return;
    container.innerHTML = "<h1>Loading students...</h1>";
    const list = await loadStudents();
    container.innerHTML = "";
    if (list.length > 0) {
        list.forEach(student => {
        const avgState = student.favg ? (student.favg >= 10 ? "g" : "r") : "n";
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="cardinfo"><span class="cardid">(#${student.id}) </span><p> ${student.fname} ${student.lname}</p></div><div class="cardavg ${avgState}avg">${student.favg || "N/A"}</div>`;
        container.appendChild(card);
        });
    } else {
        container.innerHTML= "<h1>No students found...</h1>";
    }
}

async function loadStudents() {
    const res = await fetch("http://localhost:3000/list", {
        method: "GET",
        headers: ({
            "Content-Type": "application/json"
        })
    });
    const data = await res.json();
    return data as Student[];
}