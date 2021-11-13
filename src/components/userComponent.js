
import {BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Components Loded")

let logger = new ElasticLogger()

let userService = new UserService(logger)

let user = new User(1, "İbrahim", "Karadağ", "Sakarya")
let user1 = new User(2, "Ümmügül", "Kalem", "Bolu")

userService.add(user)
userService.add(user1)

console.log(userService.getById(1).firstName)

console.log(userService.list())