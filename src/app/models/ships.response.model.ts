import { Ships } from './ships.model';

export interface ShipsResponse {
    count: number;
    next: string;
    previous: string;
    results: Ships[];
}

