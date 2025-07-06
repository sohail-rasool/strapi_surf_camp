/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { subscribeSchema } from "@/utils/schema";
import { subscribeService } from "./services";

export async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const validatedFields = subscribeSchema.safeParse({
    email: email,
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
    };
  }
  const responseData = await subscribeService(validatedFields.data.email);
  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      errorMessage: "Ops! Somethin went worng. Please try again.",
    };
  }
  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      errorMessage: "Failed to Subscribe",
    };
  }
  return {
    ...prevState,
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: "Successfully Subscribed",
  };
}
