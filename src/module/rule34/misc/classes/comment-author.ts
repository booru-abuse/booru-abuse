import { BaseUser } from "../interfaces/base-user.ts";
import { overlayKeys } from "../../../../util/object/functions/overlay-keys.ts";

/** The user found as the author of a comment. */
export class CommentAuthor extends BaseUser {
    name!: string;
    id!: number;

    constructor (object: {
        name: string;
        id: number;
    }) {
        super();
        overlayKeys(this, object);
    }
}
