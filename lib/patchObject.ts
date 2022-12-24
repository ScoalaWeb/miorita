export default function patchObject (object: object, path: Array<string>, value: any) {
    let current = object;
    let lastKey = path[0];

    while (path.length) {
        const key = path.shift();
        if (path.length < 1) {
            // @ts-ignore
            lastKey = key;
        } else {
            // @ts-ignore
            current = current[key];
        }
    }

    // @ts-ignore
    current[lastKey] = value;
}
