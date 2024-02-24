import { countAtom } from "@/atoms/storage";
import { Redirect, Stack } from "expo-router";

import { useAtom } from "jotai";

export default function AppLayout() {
  const [count, setCount] = useAtom(countAtom);

  //Should be called again after count changes to cause the redirect
  console.log("app", count);
  if (count === 1) {
    return <Redirect href="/onboarding" />;
  }

  return <Stack />;
}
