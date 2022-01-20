import { userChema } from "./shema/userChema";
import { PostChema } from './shema/postChema'
import { LikeChema } from './shema/likeChema'
import { CommentSchema } from './shema/CommentChema'

import { resumeShema } from "./shema/resumeChema";

export const typeDefs = [userChema, PostChema, LikeChema, CommentSchema, resumeShema]