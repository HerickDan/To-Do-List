import { useMutation, useQuery } from "@tanstack/react-query";


export const useCreateTask = () => {
 return  useMutation({
    mutationKey:["data"],
    mutationFn: async (postData:{taskName: string}) => {
    const response = await fetch("http://localhost:8080/api/createTask", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar os dados')
    }

    return response.json()
  }
  })
}