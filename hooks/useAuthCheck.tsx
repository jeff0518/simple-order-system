import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useAuthCheck() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [session, router]);

  return isLoading;
}

export default useAuthCheck;
