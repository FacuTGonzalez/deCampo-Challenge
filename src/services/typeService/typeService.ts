import type { TypeDetail } from "../../models/type.model";
import api from "../api"
import { typeRoutes } from "./typeRoutes"

export const typeService = {
    getTypeByUrl: async (url: string): Promise<TypeDetail> => {
        const response = await api.get(typeRoutes.getTypeByUrl(url));
        return response.data;
    }
}