import type { Operation } from "./state";
import { initAddStudent } from "./add";
import { initList } from "./list";

export function render(p: Operation) {
    const container = document.querySelector<HTMLDivElement>(".control");
    if (!container) return;
    switch(p) {
        case "add":
            container.innerHTML = addPanel();
            initAddStudent();
            break;
        case "remove":
            container.innerHTML = removePanel();
            break;
        case "update":
            container.innerHTML = updatePanel();
            break;
        case "list":
            container.innerHTML = listPanel();
            initList();
            break;
        default:
            container.innerHTML = "";
            break;
        
    }
    return;
}

function addPanel() {
    return `<div class="popup">
            <h2><i class="fa-solid fa-user-plus"></i> | Add a new Student</h2>
            <hr>
            <div class="input">
            <label for="input">First name</label>
            <input type="text" placeholder="Enter first name..." id="fnameinput">
            </div>
            <div class="input">
            <label for="input">Second name</label>
            <input type="text" placeholder="Enter second name..." id="lnameinput">
            </div>
            <div class="input">
            <label for="input">Final Average (optional)</label>
            <input type="number" placeholder="0-20" min="0" max="20" id="favginput">
            </div>
            <button class="addstudent"><i class="fa-solid fa-plus"></i> Add Student</button>
    </div>`
}

function removePanel() {
    return `
        <div class="popup">
        <h2><i class="fa-solid fa-user-minus"></i> | Remove a Student</h2>
        <hr>
        </div>
    `
}

function updatePanel() {
    return `
        <div class="popup">
        <h2><i class="fa-solid fa-user-pen"></i> | Update Student information</h2>
        <hr>
        </div>
    `
}

function listPanel() {
    return `
        <div class="popup">
        <h2><i class="fa-solid fa-user-group"></i> | List of Students</h2>
        <hr>
        <div class="list-container">
        </div>
        </div>
    `
}