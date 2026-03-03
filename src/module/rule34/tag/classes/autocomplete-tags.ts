import { AutocompleteTag } from "./autocomplete-tag.ts";
import { fetchJSON } from "../../../../util/rest.ts";
import * as APIURL from "../../api/url/functions/api-url.ts";
import type { RawAutocompleteTags } from "../../api/raw/interface/raw-autocomplete-tag.ts";

/** Tags received as autocomplete suggestions. */
export class AutocompleteTags {
    static LAST_TAG_REGEX = /(?<= ?)[^ ]+$/;

    /** Single incomplete tag to be autocompleted. */
    incompleteTag: string | null;
    /** Resulting autocomplete suggestions. */
    tags: AutocompleteTag[];
    
    constructor (array: AutocompleteTag[], tag: string) {
        this.tags = array.filter(i => i.isReal());
        this.incompleteTag = tag;
    }

    static fromRaw(raw: RawAutocompleteTags, tag: string): AutocompleteTags {
        return new this(
            raw.map(i => AutocompleteTag.fromRaw(i)),
            tag
        );
    }
}
