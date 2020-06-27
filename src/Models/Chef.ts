import { Image } from "./";

export interface Chef {
	description: string;
	headline: string;
	id: number;
	image: Image;
	markedAsChef: boolean;
	name: string;
	slug: string;
}