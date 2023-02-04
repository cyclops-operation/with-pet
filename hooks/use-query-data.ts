import { useQueryClient } from 'react-query'

const useQueryData = <T>(queryKey: readonly unknown[]) => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData<T>(queryKey)
}

export default useQueryData
