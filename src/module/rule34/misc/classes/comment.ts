import { CommentAuthor } from "./comment-author.ts";
import { overlayKeys } from "../../../../util/object/functions/overlay-keys.ts";
import type { RawComment } from "../../api/raw/interface/raw-comments.ts";

/**
 * A comment under a post.
 */
export class Comment {
    postId!: number;
    id!: number;
    author!: CommentAuthor;
    body!: string;
    index!: number;

    constructor (object: {
        postId: number;
        id: number;
        author: CommentAuthor;
        body: string;
        index: number;
    }) {
        overlayKeys(this, object);
    }

    static fromRaw(raw: RawComment, index: number) {
        return new this({
            postId: parseInt(raw.attr.post_id),
            id: parseInt(raw.attr.id),
            author: new CommentAuthor({
                name: raw.attr.creator,
                id: parseInt(raw.attr.creator_id)
            }),
            body: raw.attr.body,
            index: index
        });
    }
}
