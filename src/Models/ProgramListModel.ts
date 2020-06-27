import { Program } from "./";

export interface ProgramListModel {
	limit: number;
	offset: number;
	programs: Array<Program>;
	totalResults: number;
}