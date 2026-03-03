import type { Authentication } from "../../../client/interfaces/authentication.ts";

export interface APIParameterMap {
    "autocomplete": {
        q: string;
    };
    "post": Authentication & {
        tags?: string;
        id?: number;
        limit?: number;
        pid?: number;
    } & (
        | { json?: 0; }
        | { json: 1; fields?: "tag_info"; }
    );
}
