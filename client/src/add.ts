export function initAddStudent() {
    const btn = document.querySelector('.addstudent');
    btn?.addEventListener("click", () => {
        addStudent();
    });
    const fnameInput = document.getElementById("fnameinput") as HTMLInputElement;
    const lnameInput = document.getElementById("lnameinput") as HTMLInputElement;
    const avgInput = document.getElementById("favginput") as HTMLInputElement;
    if (!fnameInput || !lnameInput || !avgInput) return;
    initInput(fnameInput);
    initInput(lnameInput);
    initInput(avgInput);
}

function initInput(inp: HTMLInputElement) {
    if (inp.type === "text") {
        inp.addEventListener('input', function() {
            if (inp.style.borderColor === "red") inp.style.borderColor = "var(--brd)";
        });
    } else if (inp.type === "number") {
        inp.addEventListener('keydown', function(e) {
            if (['+', '-', 'e', 'E'].includes(e.key)) e.preventDefault();
        });
        inp.addEventListener('input', function() {
            const val = Number(inp.value);
            const max = Number(inp.max);
            const min = Number(inp.min);

            if (inp.max !== "" && val > max) inp.value = String(max);
            if (inp.min !== "" && val < min) inp.value = String(min);
        });
    }
}

function handleError(input: HTMLInputElement): boolean {
    if (input.value.trim() === "") {
        input.style.borderColor = "red";
        return true;
    }
    return false;
}

async function addStudent() {
    const fname = document.getElementById("fnameinput") as HTMLInputElement;
    const lname = document.getElementById("lnameinput") as HTMLInputElement;
    const favg = document.getElementById("favginput") as HTMLInputElement;
    if (!lname || !fname) return;
    const err1 = handleError(fname);
    const err2 = handleError(lname);
    if (err1 || err2) return;
    //send request
    const res = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({fname: fname.value.trim(), lname: lname.value.trim(), favg: Number(favg.value || 0)})
    });
    const data = res.text();
    console.log(data);
}