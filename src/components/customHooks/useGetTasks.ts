import { useQuery } from "@tanstack/react-query"
import { json } from "stream/consumers"

export const useGetTasks = ()=>{
    return useQuery({
        queryKey:['data'],
        queryFn: async()=>{
            const response = await fetch("http://localhost:8080/to-do-list/get-all-tasks")
            return response.json()
        }
    })
}