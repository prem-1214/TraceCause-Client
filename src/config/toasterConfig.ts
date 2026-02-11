import { toastIcons } from "./toaster/toastIcons";

export const toasterConfig = {
  position: "top-center" as const,
  richColors: false,
  closeButton: true,
  duration: 4000,
  expand: false,
  toastOptions: {
    unstyled: true,
    classNames: {
      toast: "custom-toast",
      title: "custom-toast-title",
      description: "custom-toast-description",
      success: "custom-toast-success",
      error: "custom-toast-error",
      warning: "custom-toast-warning",
      info: "custom-toast-info",
    },
  },
  icons: toastIcons,
};
