import useLocalStorage from "./useLocalStorage";

export default function LocalStorageComponent() {
    const [name, setName] = useLocalStorage("name", "");

    return (
        <input
            type="text"
            value={name}
            onchange={(e) => setName(e.target.value)}
        />
    );
}
