import IUserRepository from "../repositoreis/interfaces/IUserRepository"

export default class UserService{

    private userRepository:IUserRepository

    constructor(userRepository:IUserRepository){
        this.userRepository = userRepository
    }

    public async create( name: string, email: string, password:string ) {

        const newUser = await this.userRepository.create(name, email, password);

        return newUser;

    }
}