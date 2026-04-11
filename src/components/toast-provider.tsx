"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";

type ToastType = "success" | "error" | "info" | "achievement";

type Toast = {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
};

type ToastContextType = {
  addToast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextType>({ addToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {typeof window !== "undefined" &&
        createPortal(
          <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none max-w-[90vw] sm:max-w-[380px]">
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className={`toast-enter glass-card glass-card-hover hud-corner px-4 sm:px-5 py-3 sm:py-4 pointer-events-auto
                  ${toast.type === "success"     ? "border-l-4 border-l-cyan-400" :
                    toast.type === "error"        ? "border-l-4 border-l-pink-500" :
                    toast.type === "achievement"  ? "border-l-4 border-l-yellow-400 animate-badge-unlock" :
                    "border-l-4 border-l-purple-400"}`}
              >
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider">{toast.title}</p>
                {toast.message && <p className="text-[10px] sm:text-xs text-slate-300 mt-1 font-mono">{toast.message}</p>}
              </div>
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}
