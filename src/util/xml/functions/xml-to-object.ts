import type { XmlNode, XmlObject } from "../types/xml.ts";

export let xmlToObject = (xml: XmlNode) => {
    return convert(xml);

    function convert(node: XmlNode) {
        const object: XmlObject = {
            name: node.nodeName,
            attr: {},
            children: []
        };
    
        Array.from(node.attributes).forEach(attr =>
            object.attr[attr.name] = attr.value
        );
        Array.from(node.children).forEach(child =>
            object.children.push(convert(child))
        );
    
        return object;
    }
}
