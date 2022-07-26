import { Customer } from './../../entities/Customer';
import { getRepository } from 'typeorm';

type CustomerUpdateRequest = {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  birthday: Date;
}

export class UpdateCustomerService {
  async execute({ id, name, document, phone, email, birthday }: CustomerUpdateRequest) {
    const repo = getRepository(Customer);
    const customer = await repo.findOne(id);

    if (!customer) {
      return new Error('Customer does not exists!')
    }

    customer.name = name ? name : customer.name;
    customer.document = document ? document : customer.document;
    customer.phone = phone ? phone : customer.phone;
    customer.email = email ? email : customer.email;
    customer.birthday = birthday ? birthday : customer.birthday;
    await repo.save(customer);

    return customer;
  }
}