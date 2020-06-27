import { Image } from "./";

export interface Program {
	description: string;
	headline: string;
	id: number;
	image: Image;
	name: string;
	shownUnderPrograms: boolean;
	slug: string;
}