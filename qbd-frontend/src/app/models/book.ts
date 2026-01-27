import { tag } from "./tag";
export interface Book{
    id: string;
    title: string;
    author: string
    description: string;
    tags: tag[];
    publicationDate: Date;
    language: string;
    series: string;
}