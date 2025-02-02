import { IPlatform } from '../models/platform/IPlatform';

export interface IPlatformService {
    getAll(): Promise<IPlatform[]>;
    insertPlatform(name: String, url: String, category: String[]): Promise<IPlatform>;
    editPlatform(id: String, name: String, url: String,  category: String[]): Promise<IPlatform>;
    deletePlatform(id: String): Promise<IPlatform>;
}
