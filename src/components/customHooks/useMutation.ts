import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useCreateTask = () => {
 const queryClient = useQueryClient()
 return  useMutation({
    mutationKey:["create"],
    mutationFn: async (postData:{taskName: string, priority: string}) => {
    const response = await fetch("http://localhost:8080/api/createTask", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    return response.json()},
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['data']});
    },
  })
}