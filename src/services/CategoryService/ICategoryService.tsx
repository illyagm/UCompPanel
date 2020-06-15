import { ICategory } from "../../models/category/ICategory";

export interface ICategoryService {
    getCategories(): Promise<ICategory[]>;
    insertCategory(name: String): Promise<ICategory>;
    editCategory(id: String, name: String): Promise<ICategory>;
    deleteCategory(id: String): Promise<ICategory>;
}
