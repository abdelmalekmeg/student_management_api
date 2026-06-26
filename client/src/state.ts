export type Operation = "add" | "remove" | "update" | "list";

const state: {operation: Operation} = {
    operation: "add"
}

export function getOperation() {
    return state.operation;
}

export function setOperation(op: Operation) {
    state.operation = op;
}