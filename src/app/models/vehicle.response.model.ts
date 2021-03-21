import { Vehicle } from './vehicle.model';

export interface VehicleResponse {
    count: number;
    next: string;
    previous: null;
    results: Vehicle[];
}

