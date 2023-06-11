import config from '../../../config'
import { generateUserId } from './users.utils'
import { IUser } from './users.interface'
import { User } from './users.model'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated increment id
  const id = await generateUserId()
  user.id = id
  //default password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
