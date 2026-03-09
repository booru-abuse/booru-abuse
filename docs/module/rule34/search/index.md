# Rule 34 Help: Search

As a booru, tags are fundamental to finding content on the site. A post must
match the given query exactly in order to appear under it.

## Tags

Tag names may contain any character except spaces. It is commonplace for tags to
use an underscore in place of where a space should be found.

It is also common to disambiguate tags of similar names by appending an
underscore and their unique context within parenthesis, e.g.
`marlie_(artist)` for an artist alias, `jinu_(character)` for a character's
name, `mario_(series)` for the name of a franchise, and `zoologist_(terraria)`
for a character whose name is common to other franchises.

Tag names must not invalidate existing syntax. For example, a tag's name may not
start with a hyphen (`-`), as that syntax is reserved for excluding tags.

## Search Syntax

To find all posts that contain a specific tag, search that tag on its own. For
example, to get posts that have `breasts`, search `breasts`.

### And

Searching with multiple tags separated by a space will yield posts that contain
both tags. For example, the search `breasts penis` will return posts that have
both `breasts` and `penis`, but not posts that only have one or the other.

### Exclude

Prepending a tag with a hyphen (`-`) will prevent posts with that tag from being
shown. For example, the search `-gay` will yield posts that don't have the tag
`gay`. Or, the search `girl -boy` will return posts that have `girl`, but don't
have `boy`.

### Or

To return posts that may have one tag, another, or both, surround the group
with parenthesis and spaces, and split each tag with a tilde. For example, to
find posts with either `peach` or `daisy`, the search `( peach ~ daisy )` may
apply.

More tags may be included in an "or" group as long as each tag is separated by
spaces and a tilde, such as `( peach ~ daisy ~ rosalina )`.

This syntax does not work for groups of individual _searches._ For example, it's
currently impossible to search for posts that have either `peach` and `daisy`
or only `rosalina` such as with the search `( peach daisy ~ rosalina )`.

### Fuzzy

To yield posts that have tags similar to a given tag, suffix the tag with a
tilde (`~`). This return posts based on the Levenshtein distance[^NC-fuzzy]. For
example, the search `night~` will return posts that have any of the tags
`night`, `fight`, `bright`, and so on.

[^NC-fuzzy]: It is unknown how exactly the Levenshtein distance interferes with
  a fuzzy search. It may be assumed that the returned posts are filtered based
  on whether the closest tag's distance is below an upper bound.
