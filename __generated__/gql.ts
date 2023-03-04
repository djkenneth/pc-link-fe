/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getAllProducts($pageSize: Int, $page: Int) {\n  products(pagination: {pageSize: $pageSize, page: $page}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.GetAllProductsDocument,
    "query getProductsBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetProductsBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAllProducts($pageSize: Int, $page: Int) {\n  products(pagination: {pageSize: $pageSize, page: $page}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): (typeof documents)["query getAllProducts($pageSize: Int, $page: Int) {\n  products(pagination: {pageSize: $pageSize, page: $page}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getProductsBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getProductsBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        price\n        compare_at_price\n        rating\n        details\n        information\n        quantity\n        slug\n        image {\n          data {\n            id\n            attributes {\n              name\n              width\n              height\n              url\n            }\n          }\n        }\n        color {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        brand {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n        sub_child_category {\n          data {\n            id\n            attributes {\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;