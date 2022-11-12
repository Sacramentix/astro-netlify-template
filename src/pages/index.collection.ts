import type { CmsCollectionFile } from 'netlify-cms-core';

export type LandingFields = {
    title: string,
    hero: string,
    subtitle: string,
    text: string,
}

export const landingCollection:CmsCollectionFile = {
	label: "Landing",
	name: "index_page",
	description: "This is the content displayed on the landing page",
	fields: [{
		label: "Title",
		name: "title",
		widget: "string"
	}, {
		label: "Hero",
		name: "hero",
		widget: "markdown"
	}, {
		label: "Subtitle",
		name: "subtitle",
		widget: "string"
	}
	, {
		label: "Text",
		name: "text",
		widget: "markdown"
	}],
    file: "src/pages/index.content.md"
}