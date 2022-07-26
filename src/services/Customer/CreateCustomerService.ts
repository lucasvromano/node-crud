import { getRepository } from "typeorm";
import { Customer } from "../../entities/Customer";

type CustomerRequest = {
  name: string;
  document: string;
  phone: string;
  email: string;
  birthday: Date;
}

export class CreateCustomerService {

  async execute({ name, document, phone, email, birthday }: CustomerRequest): Promise<Customer | Error> {
    const repo = getRepository(Customer);

    if (await repo.findOne({ document, phone, email })) {
      return new Error('customer already exists');
    }

    const category = repo.create({
      name,
      document,
      phone,
      email,
      birthday
    })

    await repo.save(category)
    return category;
  }

}