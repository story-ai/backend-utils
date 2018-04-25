import { Types } from "prismic-javascript";
import { LinkElement } from "../../../../prismic-javascript/d.ts/types";

export namespace PrismicTypes {
  export type PageContent =
    | Types.SliceElement<
        "text_section",
        {},
        {
          title: Types.RichTextElement;
          filled: Types.SelectElement<"Filled" | "Unfilled">;
          content: Types.RichTextElement;
        }
      >
    | Types.SliceElement<
        "feature_section",
        {
          image: Types.ImageElement;
          content: Types.RichTextElement;
          cta_text: string;
          cta_link: Types.LinkElement;
        },
        {
          title: Types.RichTextElement;
          filled: Types.SelectElement<"Filled" | "Unfilled">;
          cards: Types.SelectElement<"With Background" | "Without Background">;
          columns: number;
        }
      >
    | Types.SliceElement<
        "image_section",
        {},
        {
          title: Types.RichTextElement;
          filled: Types.SelectElement<"Filled" | "Unfilled">;
          content: Types.RichTextElement;
          placement: Types.SelectElement<"Left" | "Right">;
          image: Types.ImageElement;
        }
      >
    | Types.SliceElement<
        "video_section",
        {},
        {
          title: Types.RichTextElement;
          filled: Types.SelectElement<"Filled" | "Unfilled">;
          content: Types.RichTextElement;
          placement: Types.SelectElement<"Left" | "Right">;
          link: Types.EmbedElement;
        }
      >;

  export interface Course extends Types.PrismicDocumentData<PageContent> {
    title: Types.RichTextElement;
    price: number;
    century_course_id: string;
    description: Types.RichTextElement;
    rating?: number;
    subject?: string;
    level?: string;
    strands: {
      strand_id: string;
      title: string;
      time: string;
      difficulty: string;
      description: Types.RichTextElement;
    }[];
  }

  export interface Page extends Types.PrismicDocumentData<PageContent> {
    title: Types.RichTextElement;
    hero_content: Types.RichTextElement;
    hero_ctas: {
      link: Types.LinkElement;
      text: string;
      filled: Types.SelectElement<"Yes" | "No">;
    }[];
    century: Types.SelectElement<"Yes" | "No">;
    skiparrow: Types.SelectElement<"Yes" | "No">;
  }

  export interface NavigationItem
    extends Types.PrismicDocumentData<
        | Types.SliceElement<"subheader", {}, { text: string }>
        | Types.SliceElement<
            "navigation_item",
            {},
            { text: string; link: Types.LinkElement }
          >
        | Types.SliceElement<"divider">
      > {
    text: string;
    link: Types.LinkElement;
  }

  export interface WebsiteSettings extends Types.PrismicDocumentData {
    _title: Types.RichTextElement;
    homepage: Types.DocumentLinkElement;
    logo: Types.ImageElement;
    footer_navigation: {
      text: string;
      link: LinkElement;
    }[];
    navigation: {
      item: Types.DocumentLinkElement<{
        text: string;
      }>;
    }[];
    copyright: string;
    footer_socials: {
      icon: string;
      link: Types.LinkElement;
    }[];
  }
}
