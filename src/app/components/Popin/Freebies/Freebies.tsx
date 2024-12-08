import { Popin } from "@/app/freebies/page";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./freebies.module.scss";
import { useForm } from "react-hook-form";
import Form from "./Form";
export interface EmailStatus {
  isPending: boolean;
  isSend: boolean;
  isNotSend: boolean;
}

interface FreebiesPopinProps {
  setPopin: Dispatch<SetStateAction<{ isOpen: boolean; name: string }>>;
  popin: Popin;
}

const FreebiesPopin = ({ setPopin, popin }: FreebiesPopinProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailStatus, setEmailStatus] = useState<EmailStatus>({
    isPending: false,
    isSend: false,
    isNotSend: false,
  });

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const generatePdf = async () => {
    try {
      const response = await fetch(`../../../api/generate-pdf`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data: any) => {
    setEmailStatus((prevState) => ({
      ...prevState,
      isPending: true,
    }));

    await fetch("../../../api/freebies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseFromSubscribing = await fetch("../../../api/subscribe", {
      body: JSON.stringify(watch("email")),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (responseFromSubscribing.ok) {
      generatePdf();
      setEmailStatus((prevState) => ({
        ...prevState,
        isSend: true,
        isPending: false,
      }));

      setTimeout(() => {
        setPopin({ isOpen: false, name: "" });
      }, 1000);
    } else {
      setEmailStatus((prevState) => ({
        ...prevState,
        isNotSend: true,
        isPending: false,
      }));
      setTimeout(() => {
        setPopin({ isOpen: false, name: "" });
      }, 1000);
    }
  };

  useEffect(() => {
    if (pdfUrl && emailStatus.isSend) {
      window.open(pdfUrl, "_blank");
    }
  }, [pdfUrl, emailStatus]);

  const onClose = () => {
    setPopin({ name: "", isOpen: false });
  };

  const getTitle = (name: string) => {
    switch (name) {
      case "5-tips-to-be-calm":
        return "5 astuces pour trouver le calme dans toutes les situations";
      default:
        return "";
    }
  };
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPopin({ isOpen: false, name: "" });
      }
    };

    if (popin.isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [popin.isOpen, setPopin]);

  useEffect(() => {
    if (popin.isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        "a, button, textarea, input, select"
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };
      modalRef.current.addEventListener("keydown", trapFocus);
      return () => modalRef.current?.removeEventListener("keydown", trapFocus);
    }
  }, [popin.isOpen]);

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby={`modal-freeby-${getTitle(popin.name)}`}
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.content}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          aria-label='Close modal'
          className={styles.closeButton}
        >
          &times;
        </button>
        <h2 id='modal-title'> Avoir le freeby : {getTitle(popin.name)}</h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          watch={watch}
          emailStatus={emailStatus}
        />
      </div>
    </div>
  );
};

export default FreebiesPopin;
