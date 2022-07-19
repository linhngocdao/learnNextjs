import useSWR, { mutate, useSWRConfig } from "swr"
import { add, getAll, remove } from "../api/product";

const useProduct = () => {
    
    // const { mutate } useSWRConfig();
    const fetcher = async (url: string) => {
        const {data} = await getAll(url);
        return data;
    };

    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 3000
    })
    const create = async (item) => {
              const {data: product} = await add(item)
            return[...data, product] 
    }
    const removes = async (id:any) => {
        const {data: product} = await remove(id)
        return[...data, product]
    }
    return { 
        create,
        data,
        error,
        mutate,
        removes
    }

}


export default useProduct