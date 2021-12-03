import { ImagesType } from './images'

export interface CrewType {
  id: number
  name: String
  images: ImagesType
  role: String
  bio: String
}
