import supabase from "./supabaseClient";

export const logIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login failed:", error.message);
  } else {
    console.log("Login successful:", data);
  }
};