import {
  RichTextElement,
  LinkElement,
  EmbedElement,
  ImageElement,
  SelectElement,
  SliceElement,
  PrismicDocumentData,
  DocumentLinkElement
} from "prismic-javascript";

export namespace PrismicTypes {
  export type PageContent =
  	| SliceElement<
      	"text_section",
      	{},
      	{
          title: RichTextElement;
          filled: SelectElement<"Filled" | "Unfilled">;
          content: RichTextElement;
      	}
      >
  	| SliceElement<
      	"feature_section",
      	{
          image: ImageElement;
          content: RichTextElement;
          cta_text: string;
          cta_link: LinkElement;
      	},
      	{
          title: RichTextElement;
          filled: SelectElement<"Filled" | "Unfilled">;
      	}
      >
  	| SliceElement<
      	"image_section",
      	{},
      	{
          title: RichTextElement;
          filled: SelectElement<"Filled" | "Unfilled">;
          content: RichTextElement;
          placement: SelectElement<"Left" | "Right">;
          image: ImageElement;
      	}
      >
  	| SliceElement<
      	"video_section",
      	{},
      	{
          title: RichTextElement;
          filled: SelectElement<"Filled" | "Unfilled">;
          content: RichTextElement;
          placement: SelectElement<"Left" | "Right">;
          link: EmbedElement;
      	}
      >;

  export interface Course extends PrismicDocumentData<PageContent> {
  	title: RichTextElement;
  	price: number;
  	century_course_id: string;
  	description: RichTextElement;
  	rating?: number;
  	subject?: string;
  	level?: string;
  	strands: {
      strand_id: string;
      title: string;
      time: string;
      difficulty: string;
      description: RichTextElement;
  	}[];
  }

  export interface Page extends PrismicDocumentData<PageContent> {
  	title: RichTextElement;
  	hero_content: RichTextElement;
  	hero_ctas: {
      link: LinkElement;
      text: string;
      filled: SelectElement<"Yes" | "No">;
  	}[];
  	century: SelectElement<"Yes" | "No">;
  	skiparrow: SelectElement<"Yes" | "No">;
  }

  export interface NavigationItem
  	extends PrismicDocumentData<
      	| SliceElement<"navigation_item", {}, { text: string; link: LinkElement }>
      	| SliceElement<"divider">
      > {
  	text: string;
  	link: LinkElement;
  }

  export interface WebsiteSettings extends PrismicDocumentData {
  	_title: RichTextElement;
  	homepage: DocumentLinkElement;
  	logo: ImageElement;
  	navigation: {
      item: DocumentLinkElement<{
      	text: string;
      }>;
  	}[];
  	copyright: string;
  	footer_socials: {
      icon: string;
      link: LinkElement;
  	}[];
  }

}

