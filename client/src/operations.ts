import { render } from "./render";
import { setOperation } from "./state";
import type { Operation } from "./state";

const opts = document.querySelectorAll<HTMLDivElement>('.opt');

export function initOperations(): void {
    opts.forEach(opt => {
        opt.addEventListener("click", changeOperation);
    });
}

function changeOperation(e: MouseEvent): void {
    const el = e.currentTarget as HTMLDivElement;
    if (el.classList.contains(`${el.id}-active`)) return;
    opts.forEach(opt => opt.classList.remove(`${opt.id}-active`));
    el.classList.add(`${el.id}-active`);
    const oper = el.id as Operation;
    setOperation(oper);
    render(oper);
}