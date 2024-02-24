import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useAtom, useSetAtom } from "jotai";
import { countAtom } from "@/atoms/storage";

const OnboardingScreen = () => {
  const [count, setCount] = useAtom(countAtom);

  console.log("onboarding", count);
  return (
    <SafeAreaView>
      <Text>onboarding</Text>
      <Button
        title="test"
        onPress={() => {
          setCount((prev) => prev + 1);
          //   console.log("Hello");
          //   router.replace("/");
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
