import { TimeEstimation, Image } from "./";

export interface RecipeLinkModel {
	estimatedCookingTime: TimeEstimation;
	estimatedPreparationTime: TimeEstimation;
	id: number;
	image: Image;
	migratedRecipe: boolean;
	slug: string;
	title: string;
}