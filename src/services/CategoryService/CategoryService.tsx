import { ICategoryService } from './ICategoryService';
import axios from 'axios';

export default class CategoryService implements ICategoryService {
    getCategories(): Promise<any> {
        return axios.get('http://localhost:3000/category/getCategories');
    }
    async insertCategory(name: String): Promise<any> {
        try {
            const response = await axios.post("http://localhost:3000/category/insertCategory", {
                name: name,
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    async editCategory(id: String, name: String): Promise<any>{
        try {
            const response = await axios.post("http://localhost:3000/category/editCategory", {
                categoryId: id,
                name: name,
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCategory(id: String): Promise<any> {
        try {
            const response = await axios.post("http://localhost:3000/category/deleteCategory", {
                categoryId: id
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    
}

