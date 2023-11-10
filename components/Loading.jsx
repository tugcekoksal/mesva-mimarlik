import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50 ${
        isLoading ? "" : "pointer-events-none"
      }`}
    >
      <RiseLoader color="#c5c5c5" />
    </motion.div>
  );
};

export default Loading;
