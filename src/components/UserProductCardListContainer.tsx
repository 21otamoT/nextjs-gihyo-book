import Link from 'next/link'
import { Fragment } from 'react'
import ProductCard from './organisms/ProductCard'
import ProductCardList from './organisms/ProductCardList'
import useSearch from 'services/products/use-search'
import type { ApiContext,Product } from 'types/data'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy'
}