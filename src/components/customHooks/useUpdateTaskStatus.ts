import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdateTaksStatus = () =>{
     const queryClient = useQueryClient()
     return  useMutation({
         mutationKey:["create"],
         mutationFn: async (postData:{id: string}) => {
         const response = await fetch(`http://localhost:8080/to-do-list/update-task/${postData.id}`, {
           method: 'PATCH',
           headers: {
             'Content-Type': 'application/json'
           },
         })
         return response.json()},
         onSuccess: () => {
           queryClient.invalidateQueries({queryKey:['data']});
         },
       }) 
}