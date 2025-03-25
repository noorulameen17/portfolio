
import React, { useState, useCallback, useContext } from "react";

const TOAST_TIMEOUT = 5000; // 5 seconds

const ToastContext = React.createContext({
  toast: (props) => {},
});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(
    ({ title, description, duration = TOAST_TIMEOUT }) => {
      const id = Math.random().toString(36).substr(2, 9);

      setToasts((current) => [...current, { id, title, description }]);

      setTimeout(() => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
      }, duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm animate-slide-up"
          >
            {toast.title && (
              <h4 className="font-medium text-sm">{toast.title}</h4>
            )}
            {toast.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {toast.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};