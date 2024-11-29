// "use server"
// import { OAuthStrategy, createClient } from "@wix/sdk";
// import { collections, products } from "@wix/stores";
// import { orders } from "@wix/ecom";
// import { cookies } from "next/headers";
// import { members } from '@wix/members';

// export const wixClientServer = async () => {
//   let refreshToken;

//   try {
//     const cookieStore = cookies();
//     refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
//   } catch (e) {}

//   const wixClient = createClient({
//     modules: {
//       products,
//       collections,
//       orders,
//       members,
//     },
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       tokens: {
//         refreshToken,
//         accessToken: { value: "", expiresAt: 0 },
//       },
//     }),
//   });

//   return wixClient;
// };

"use server";
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
import { members } from "@wix/members";

export const wixClientServer = async () => {
  let refreshToken = null;

  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("refreshToken")?.value;

    if (tokenCookie) {
      refreshToken = JSON.parse(tokenCookie);
    } else {
      console.warn("Refresh token cookie is missing.");
    }
  } catch (error) {
    console.error("Error parsing refresh token cookie:", error);
  }

  if (!process.env.NEXT_PUBLIC_WIX_CLIENT_ID) {
    const errorMessage = "NEXT_PUBLIC_WIX_CLIENT_ID is not defined in environment variables.";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    const wixClient = createClient({
      modules: {
        products,
        collections,
        orders,
        members,
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: refreshToken
          ? {
              refreshToken,
              accessToken: { value: "", expiresAt: 0 }, // Access token will be refreshed
            }
          : null, // No tokens available; unauthenticated
      }),
    });

    if (!wixClient) {
      throw new Error("Failed to create Wix client instance.");
    }

    return wixClient;
  } catch (error) {
    console.error("Failed to initialize Wix client:", error);

    // Optionally rethrow the error to propagate it further
    throw new Error(
      "Wix client initialization error. Please ensure tokens and configuration are correct."
    );
  }
};