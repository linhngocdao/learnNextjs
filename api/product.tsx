import instance from "./config";

export const getAll = (url) => {
    return instance.get(url);
}

export const add = (product) => {
    return instance.post("/products", product)
}

export const remove = (id:any) => {
    return instance.delete(`/products/${id}`)
}
export const update = (id:any) => {
    return instance.put()
}