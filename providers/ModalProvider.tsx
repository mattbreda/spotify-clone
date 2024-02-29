"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // small trick to avoid opening modals during SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (<>
  <AuthModal />
  </>);
};

export default ModalProvider;
