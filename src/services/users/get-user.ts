import type { ApiContext,User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number
}

/**
 * ユーザーAPI（個別指導）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
   {
    "id": "1",
    "username":"takato",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Loren Ipsum is simply dummy text of the printing and typesetting industry"
   }
   */
  return await fetcher (
    `${context.apiRootUrl.replace(/\/$/g,'')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser