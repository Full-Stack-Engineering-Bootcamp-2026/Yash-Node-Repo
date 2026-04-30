import { Service, Container } from "typedi";
import { UserRepository } from "../repository/user.repository.js";
import { userDto } from "../types/userDto.js";

@Service()
export class UserService {
  private userRepository = Container.get(UserRepository);

  getAllUser() {
    return this.userRepository.findAllUsers();
  }

  getUserByEmail(email: string) {
    const user = this.userRepository.findByEmail(email);
    return user;
  }

  createUser(data: userDto) {
    return this.userRepository.createUser(data);
  }
}
