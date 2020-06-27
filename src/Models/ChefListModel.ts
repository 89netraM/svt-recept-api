import { Chef } from "./";

export interface ChefListModel {
	chefs: Array<Chef>;
	limit: number;
	offset: number;
	totalResults: number;
}