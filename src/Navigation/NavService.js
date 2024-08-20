import { createRef } from "react";

// Create a ref for navigation
export const navigationRef = createRef();

// Function to navigate to a screen
export function navigate(name, params) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
