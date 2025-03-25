'use server';

import { db, auth } from "@/firebase/admin";
import { error } from "console";
import { cookies } from "next/headers";


const SESSION_DURATION = 60 * 60 * 24 * 7;

export async function signUp(params:SignUpParams){
  const {uid,name,email} = params;

  try{
    const userRecord = await db.collection('users').doc(uid).get();

    if(userRecord.exists){
      return{
        success:false,
        message: 'User already exists. Please sign in instead.'
      }
    }

    await db.collection('users').doc(uid).set({
      name,email
    })

    return{
      success: true,
      message: 'Account created successfully.Please sign in'
    }
  }

    catch(e: any) {

    console.error('Error creating a user',e);

    if (e.code === 'auth/email-already-exists') {

      return{
        success: false,
        message: 'This email is already in use'
      }
    }

    return{
      success: false,
      message: 'Failed to create an account'
    }
    
  }
}

export async function setSessionCookie(idToken: string){
  const cookieStore = await cookies();

   const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // milliseconds
  });

  // Set cookie in the browser
  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}
