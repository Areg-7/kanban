
// import { wixClientServer } from "@/lib/wixClientServer";
// import { products } from "@wix/stores";
// import Image from "next/image";
// import Link from "next/link";
// import DOMPurify from "isomorphic-dompurify";
// import Pagination from "./Pagination";

// const PRODUCT_PER_PAGE = 8;

// const ProductList = async ({
//   categoryId,
//   limit,
//   searchParams,
// }: {
//   categoryId: string;
//   limit?: number;
//   searchParams?: any;
// }) => {
//   const wixClient = await wixClientServer();

//   const productQuery = wixClient.products
//     .queryProducts()
//     .startsWith("name", searchParams?.name || "")
//     .eq("collectionIds", categoryId)
//     .hasSome(
//       "productType",
//       searchParams?.type ? [searchParams.type] : ["physical", "digital"]
//     )
//     .gt("priceData.price", searchParams?.min || 0)
//     .lt("priceData.price", searchParams?.max || 999999)
//     .limit(limit || PRODUCT_PER_PAGE)
//     .skip(
//       searchParams?.page
//         ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
//         : 0
//     );
//   // .find();

//   if (searchParams?.sort) {
//     const [sortType, sortBy] = searchParams.sort.split(" ");

//     if (sortType === "asc") {
//       productQuery.ascending(sortBy);
//     }
//     if (sortType === "desc") {
//       productQuery.descending(sortBy);
//     }
//   }

//   const res = await productQuery.find();

//   // const sanitizedHref = DOMPurify.sanitize(
//   //   products.additionalInfoSections.find(
//   //     (section: any) => section.title === "link"
//   //   )?.description || ""
//   // );

//   return (
//     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
//       {res.items.map((product: products.Product) => (
//         <>
//         {product.additionalInfoSections && (
//           <Link
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
//           key={product._id}
//           href={(() => {
//             const rawDescription = product.additionalInfoSections.find(
//               (section: any) => section.title === "link"
//             )?.description;
      
//             if (!rawDescription) return "#"; // Default fallback URL
      
//             // Sanitize and remove HTML tags
//             const sanitizedText = DOMPurify.sanitize(rawDescription, {
//               ALLOWED_TAGS: [], // Remove all tags
//               ALLOWED_ATTR: [], // Remove all attributes
//             }).trim();
      
//             // Check if sanitized text is a valid URL
//             try {
//               const url = new URL(sanitizedText);
//               return url.href; // Return as absolute URL if valid
//             } catch (error) {
//               return "#"; // Fallback for invalid URLs
//             }
//           })()}
//           target="_blank"
//           rel="noopener noreferrer"
//           >
        
//           <div className="relative w-full h-80">
//             <Image
//               src={product.media?.mainMedia?.image?.url || "/product.png"}
//               alt=""
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//             />
//             {product.media?.items && (
//               <Image
//                 src={product.media?.items[1]?.image?.url || "/product.png"}
//                 alt=""
//                 fill
//                 sizes="25vw"
//                 className="absolute object-cover rounded-md"
//               />
//             )}
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">{product.name}</span>
//             <span className="font-semibold">${product.price?.price}</span>
//           </div>
//           {product.additionalInfoSections && (
//             <div
//               className="text-sm text-gray-500"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(
//                   product.additionalInfoSections.find(
//                     (section: any) => section.title === "shortDesc"
//                   )?.description || ""
//                 ),
//               }}
//             ></div>
//           )}
//             <button className="hover-effect rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
// 						<li
// 							className='relative overflow-hidden block text-center grow p-0'
// 							data-hover="Buy now"
// 						>
// 							<span className='block'>Buy now</span>
// 						</li>
//           </button>
//         </Link>
//       )}
//       </>
//       ))}
//       {searchParams?.cat || searchParams?.name ? (
//         <Pagination
//           currentPage={res.currentPage || 0}
//           hasPrev={res.hasPrev()}
//           hasNext={res.hasNext()}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default ProductList;





import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  try {
    const wixClient = await wixClientServer();

    // Build the product query
    const productQuery = wixClient.products
      .queryProducts()
      .startsWith("name", searchParams?.name || "")
      .eq("collectionIds", categoryId)
      .hasSome(
        "productType",
        searchParams?.type ? [searchParams.type] : ["physical", "digital"]
      )
      .gt("priceData.price", searchParams?.min || 0)
      .lt("priceData.price", searchParams?.max || 999999)
      .limit(limit || PRODUCT_PER_PAGE)
      .skip(
        searchParams?.page
          ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
          : 0
      );

    // Apply sorting
    if (searchParams?.sort) {
      const [sortType, sortBy] = searchParams.sort.split(" ");
      if (sortType === "asc") productQuery.ascending(sortBy);
      if (sortType === "desc") productQuery.descending(sortBy);
    }

    const res = await productQuery.find();

    // Handle empty results
    if (!res.items || res.items.length === 0) {
      return (
        <div className="mt-12 text-center">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      );
    }

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {res.items.map((product: products.Product) => (
          <Link
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
            href={(() => {
              const rawDescription = product.additionalInfoSections?.find(
                (section: any) => section.title === "link"
              )?.description;

              if (!rawDescription) return "#"; // Default fallback URL

              // Sanitize and validate the URL
              const sanitizedText = DOMPurify.sanitize(rawDescription, {
                ALLOWED_TAGS: [],
                ALLOWED_ATTR: [],
              }).trim();

              try {
                const url = new URL(sanitizedText);
                return url.href;
              } catch {
                return "#"; // Invalid URL fallback
              }
            })()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || "Product Image"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              {product.media?.items?.[1]?.image?.url && (
                <Image
                  src={product.media.items[1].image.url}
                  alt="Additional product view"
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">
                ${product.price?.price?.toFixed(2) || "0.00"}
              </span>
            </div>
            {product.additionalInfoSections?.find(
              (section: any) => section.title === "shortDesc"
            )?.description && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: any) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}
            <button className="hover-effect rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
              <li
                className="relative overflow-hidden block text-center grow p-0"
                data-hover="Buy now"
              >
                <span className="block">Buy now</span>
              </li>
            </button>
          </Link>
        ))}
        {searchParams?.cat || searchParams?.name ? (
          <Pagination
            currentPage={res.currentPage || 0}
            hasPrev={res.hasPrev()}
            hasNext={res.hasNext()}
          />
        ) : null}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="mt-12 text-center">
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      </div>
    );
  }
};

export default ProductList;
