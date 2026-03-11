import type { BaseTag } from "../interfaces/base-tag.ts";
import type { RawAutocompleteTags } from "../../api/raw/interface/raw-autocomplete-tag.ts";

/** A tag received from an autocomplete suggestion. */
export class AutocompleteTag implements Pick<BaseTag, "name" | "count"> {
    name: string;
    count: number;

    /** Returns whether this tag is legitimate and not malformed or fake. */
    isReal(): boolean {
        return !AutocompleteTag.RAW_INVALID_REGEX.test(this.name);
    }

    static RAW_INVALID_REGEX = /\\r\\n/;
    static RAW_LABEL_COUNT_REGEX = /(?<=\()\d+(?=\)$)/;

    constructor (object: {
        name: string;
        count: number;
    }) {
        this.name = object.name;
        this.count = object.count;
    }

    static fromRaw(raw: RawAutocompleteTags[number]) {
        return new this({
            name: raw.value,
            count: parseInt(
                raw.label.match(this.RAW_LABEL_COUNT_REGEX)?.[0] ?? "0"
            )
        });
    }
}
