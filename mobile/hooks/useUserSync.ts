import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useApiClient, userApi } from "../utils/api";
import { useMutation } from "@tanstack/react-query";


export const useUserSync = () =>{
    const {isSignedIn} = useAuth()
    const api = useApiClient()
    
  const syncUserMutation = useMutation({
    mutationFn: () => userApi.syncUser(api),
    onSuccess: (response: any) => console.log("User synced successfully:", response.data.user),
    onError: (error) => console.error("User sync failed:", error),
  });
  useEffect(() => {
    // if user is signed in and user is not synced yet, sync user
    if (isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn]);

  return null;
};
