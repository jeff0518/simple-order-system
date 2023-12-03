import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Alert } from "@/utils/getSweetalert";

function useAuthCheck() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      Alert.fire({
        icon: "error",
        title: "請重新登入!",
      });
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [session, router]);

  return isLoading;
}

export default useAuthCheck;
