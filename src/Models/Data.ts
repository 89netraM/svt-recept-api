import { Chef, TimeEstimation, Image, Ingredients, Portions, Program, RecipeTeaser, Tags, VideoClip, VideoEpisode } from "./";

export interface Data {
	chefs: Array<Chef>;
	estimatedCookingTime: TimeEstimation;
	estimatedPreparationTime: TimeEstimation;
	image: Array<Image>;
	ingredients: Array<Ingredients>;
	ingress: string;
	/** May contain HTML tags. */
	instructions: string;
	migratedRecipe: boolean;
	portions: Portions;
	program: Program;
	publishedDate: string;
	related: Array<RecipeTeaser>;
	tags: Array<Tags>;
	title: string;
	videoClips: Array<VideoClip>;
	videoEpisodes: Array<VideoEpisode>;
	vingette: string;
}