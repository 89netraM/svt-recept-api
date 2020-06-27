import { TimeEstimation, Image } from "./";

export interface RecipeTeaser {
	activatedDateLong: number;
	estimatedCookingTime: TimeEstimation;
	estimatedPreparationTime: TimeEstimation;
	homeSectionId: number;
	id: number;
	images: Array<Image>;
	ingress: string;
	migratedRecipe: boolean;
	publishedDate: string;
	publishedDateLong: number;
	slug: string;
	title: string;
	vignette: string;
}