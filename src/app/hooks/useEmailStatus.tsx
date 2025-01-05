"use client";
import { useState } from "react";
import { EmailStatus } from "../components/Popin/Freebies/Freebies";

const useEmailStatus = () => {
  const [emailStatus, setEmailStatus] = useState<EmailStatus>({
    isPending: false,
    isSend: false,
    isNotSend: false,
  });
  return {
    emailStatus,
    setEmailStatus,
  };
};

export default useEmailStatus;
