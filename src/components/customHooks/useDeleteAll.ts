import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useDeleteAll = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey: ["deleteAll"],
            mutationFn: async () => {
                const response = await fetch("http://localhost:8080/to-do-list/delete-all-tasks", {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                return response.json()
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['data'] });
            },
        }
    )
}