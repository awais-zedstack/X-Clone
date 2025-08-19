import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCLient = new QueryClient() 

export default function RootLayout() {

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryCLient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
