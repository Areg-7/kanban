// import Filter from "@/components/Filter";
// import ProductList from "@/components/ProductList";
// import Skeleton from "@/components/Skeleton";
// import { wixClientServer } from "@/lib/wixClientServer";
// import Image from "next/image";
// import { Suspense } from "react";
// import img from '@/app/favicon.ico'

// const ListPage = async ({ searchParams }: { searchParams: any }) => {
//   const wixClient = await wixClientServer();

//   const cat = await wixClient.collections.getCollectionBySlug(
//     searchParams.cat || "all-products"
//   );

//   return (
//     <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative text-center">
//       {/* CAMPAIGN */}
//       <div className="bg-background h-64 py-8 px-56 sm:px-8">
//         {/* <div className="w-2/3 flex flex-col items-center justify-center gap-8"> */}
//           <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
//           from each purchased item there  will be 7-20% to <span className='text-primary'>HELP</span>{' '} children from diseases.
//           {' '}
//           <Image className='w-12 text-center inline' src={img} alt='' />
//           </h1>
//         {/* </div> */}
//         {/* <div className="relative w-1/3">
//           <Image src="/woman.png" alt="" fill className="object-contain" />
//         </div> */}
//       </div>
//       {/* FILTER */}
//       <Filter />
//       {/* PRODUCTS */}
//       <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
//       <Suspense fallback={<Skeleton/>}>
//         <ProductList
//           categoryId={
//             cat.collection?._id || "00000000-000000-000000-000000000001"
//           }
//           searchParams={searchParams}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default ListPage;

import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";
import img from "@/app/favicon.ico";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  let cat;
  try {
    cat = await wixClient.collections.getCollectionBySlug(
      searchParams.cat || "all-products"
    );
  } catch (error) {
    console.error("Error fetching collection:", error);
    cat = null; // Fallback to null if fetching the collection fails
  }

  const collectionName = cat?.collection?.name || "Our Products";
  const collectionId =
    cat?.collection?._id || "00000000-000000-000000-000000000001";

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative text-center">
      {/* CAMPAIGN */}
      <div className="bg-background h-64 py-8 px-56 sm:px-8">
        <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
          From each purchased item, there will be 7-20% to{" "}
          <span className="text-primary">HELP</span> children from diseases.{" "}
          <Image className="w-12 text-center inline" src={img} alt="Campaign" />
        </h1>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{collectionName} For You!</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList categoryId={collectionId} searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default ListPage;
