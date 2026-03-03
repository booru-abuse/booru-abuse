import { BASE_URL } from "../constants/base-url.ts";
import { createURL } from "../../../../../util/misc/functions/create-url.ts";
import type { APIParameterMap } from "../interfaces/api-parameter-map.ts";
import type { Authentication } from "../../../client/interfaces/authentication.ts";

let getURL = (
    s: string,
    params: Parameters<typeof createURL>[0]["params"]
) => createURL({
    base: BASE_URL,
    params: {
        page: "dapi",
        q: "index",
        s: s,
        ...params
    }
});

export function APIURL<S extends keyof APIParameterMap>(
    s: S,
    params: APIParameterMap[S]
) {
    switch (s) {
        case "autocomplete": return createURL({
            base: BASE_URL,
            path: [ "autocomplete.php" ],
            params: params
        });
        case "post":
            return getURL(s, params);
    }
}
