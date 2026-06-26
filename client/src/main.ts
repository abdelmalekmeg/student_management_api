import { initOperations } from "./operations";
import { render } from "./render";
import { getOperation } from "./state";
import { initAddStudent } from "./add";

initOperations();
render(getOperation());
initAddStudent();