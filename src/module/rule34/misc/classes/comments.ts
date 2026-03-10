import { Comment } from "./comment.ts";
import { overlayKeys } from "../../../../util/object/functions/overlay-keys.ts";
import type { RawComments } from "../../api/raw/interface/raw-comments.ts";

/**
 * An array of comments.
 */
export class Comments extends Array<Comment> {
    postId?: number;

    constructor (object: {
        postId?: number;
        array: Comment[];
    }) {
        overlayKeys(this, object);
    }

    static fromRaw(raw: RawComments, postId?: number) {
        const array = raw.children.map(i => Comment.fromRaw(i));
        return new this(postId
            ? { postId, array }
            : { array }
        );
    }
}
