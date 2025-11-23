import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

import Image from "next/image"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
}: {
  categories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Category Hero */}
      <div className="relative w-full h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
          alt="Category Background"
          className="object-cover"
          fill
          priority
        />
        <div className="relative z-20 text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight" data-testid="category-page-title">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-12 content-container gap-8"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} data-testid="sort-by-container" />
        <div className="w-full">
          <div className="flex flex-row mb-8 text-base-regular gap-2 text-ui-fg-subtle">
            {parents &&
              parents.map((parent) => (
                <span key={parent.id} className="flex items-center gap-2">
                  <LocalizedClientLink
                    className="hover:text-black transition-colors"
                    href={`/categories/${parent.handle}`}
                    data-testid="sort-by-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                  <span className="text-gray-400">/</span>
                </span>
              ))}
            <span className="font-semibold text-black">{category.name}</span>
          </div>

          {category.category_children && (
            <div className="mb-12">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.category_children?.map((c) => (
                  <li key={c.id}>
                    <InteractiveLink href={`/categories/${c.handle}`}>
                      <div className="border border-ui-border-base p-4 rounded-lg text-center hover:shadow-md transition-all hover:border-black">
                        {c.name}
                      </div>
                    </InteractiveLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
