declare module "prismic-javascript" {

  export interface PrismicDocumentData<
    SliceType extends SliceElement = SliceElement
  > {
    body: SliceType[];
  }

  export type PrismicElement =
    | RichTextElement
    | SliceElement
    | LinkElement
    | EmbedElement
    | SelectElement
    | ImageElement
    | PrismicDocumentData
    | EmbedElement
    | string
    | number;

  export type RichTextElement = {
    type: string;
    text: string;
    spans: { start: number; end: number; type: string }[];
  }[];

  export interface SliceElement<
    Type extends string = string,
    Item extends { [k: string]: PrismicElement } = {},
    Primary extends { [k: string]: PrismicElement } = {}
  > {
    slice_type: Type;
    slice_label: string;
    items: Item[];
    primary: Primary;
  }

  export type WebLinkElement = { link_type: "Web"; url: string };
  export type MediaLinkElement = {
    link_type: "Media";
    name: string;
    kind: string;
    url: string;
    size: string;
    height: string;
    width: string;
  };
  export type DocumentLinkElement<PreFetched = any> = {
    link_type: "Document";
    type: string;
    id: string;
    tags: string[];
    slug: string;
    lang: string;
    uid: string;
    isBroken: false;
    data: PreFetched | null;
  };
  export type LinkElement =
    | WebLinkElement
    | MediaLinkElement
    | DocumentLinkElement<any>;

  export type EmbedElement = {
    html: string;
    thumbnail_width: number;
    thumbnail_url: string;
    type: string;
    provider_url: string;
    author_name: string;
    height: number;
    thumbnail_height: number;
    provider_name: string;
    author_url: string;
    width: number;
    title: string;
    version: string;
    embed_url: string;
  };

  export type SelectElement<V extends string = string> = V;

  export interface LinkResolver {
    (x: { type: string; uid: string }): string;
  }

  export interface ImageElement {
    dimensions: {
      width: number;
      height: number;
    };
    alt: string;
    copyright: string;
    url: string;
  }
}
