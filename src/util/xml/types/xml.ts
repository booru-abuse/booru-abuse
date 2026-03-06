import type { parseXml } from "../functions/parse-xml.ts";

export type XmlDocument = ReturnType<typeof parseXml>;
export type XmlNode = XmlDocument | XmlDocument["children"][number];

export interface XmlObject {
    name: string;
    attr: { [key: string]: string | undefined; };
    children: XmlObject[]
}
