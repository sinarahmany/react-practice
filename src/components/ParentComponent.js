import { ChildComponenet } from "./ChildComponent";

export const ParentComponenet = () => {
    const greetParrent = (child) => {
        alert(`hello ${child}`);
    }

    return <ChildComponenet greetHandler={greetParrent} />
}