import useLocalStorage from "../useLocalStorage/useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function LocalStorageComponent() {
    const [name, setName] = useLocalStorage("name", "");

    useUpdateLogger(name); // logging whenever the name changes

    return (
        <input
            type="text"
            value={name}
            onchange={(e) => setName(e.target.value)}
        />
    );
}
