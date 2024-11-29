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
    console.error("Failed to parse refresh token cookie:", error);
  }

  if (!process.env.NEXT_PUBLIC_WIX_CLIENT_ID) {
    throw new Error("NEXT_PUBLIC_WIX_CLIENT_ID is not defined in environment variables.");
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
              accessToken: { value: "", expiresAt: 0 },
            }
          : null,
      }),
    });

    return wixClient;
  } catch (error) {
    console.error("Failed to initialize Wix client:", error);
    throw error;
  }
};
