interface IFetchInput {
    data?: any
}
export default function editorApi (url: string, args: IFetchInput & Record<string, any> = {}) {
    const { data, ...otherParams } = args;

    const { origin } = window.location;

    let body;
    try {
        body = JSON.stringify(data);
    } catch {
        body = args.body;
    }

    return fetch(`${origin}/${url}`, {
        ...otherParams,
        body,
        headers: {
            ...otherParams.headers,
            "Content-Type": "application/json",
        },
    });
}
