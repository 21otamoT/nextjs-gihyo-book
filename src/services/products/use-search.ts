import { initial } from "lodash";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import path from "path";
import { sort } from "semver";
import useSWR from "swr";
import type { ApiContext, Category, Condition, Product } from "types/data";

export type UseSearchProps = {
  category?: Category
  conditions?: Condition[]
  userId?: number
  sort?: keyof Omit<Product, 'owner'>
  order?: 'asc' | 'desc'
  initial?: Product[]
}

export type UseSearch = {
  products: Product[]
  isLoading: boolean
  isError: boolean
}

const UseSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  //パラメータを設定
  category && params.append('category',category)
  userId && params.append('owner.id', `${userId}`)
  conditions && 
    conditions.forEach(condition => params.append('condition', condition))
      sort && params.append('_sort',sort)
      order && params.append('_order',order)

    //パラメーターからURLクエリに
    const query = params.toString()
    const {data, error} = useSWR<Product[]>(
      query.length > 0? `${path}?${query}` : path,
    )

    return {
      products: data ?? initial ?? [],
      isLoading: !error && !data,
      isError: !!error,
    }
  };