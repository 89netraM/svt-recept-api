import { Image } from "./";
import { Tag } from "./Tag";

export interface RecipeCategory {
	description: string;
	headline: string;
	id: string;
	image: Image;
	name: string;
	slug: string;
	subCategories: Array<unknown>;
	taggroup: string;
	tags: Array<Tag>;
}