import { UpdateScheduleController } from './controllers/Schedule/UpdateScheduleController';
import { CreateScheduleController } from './controllers/Schedule/CreateScheduleController';
import { UpdateServiceController } from './controllers/Service/UpdateServiceController';
import { DeleteServiceController } from './controllers/Service/DeleteServiceController';
import { GetAllServicesController } from './controllers/Service/GetAllServicesController';
import { CreateServiceController } from './controllers/Service/CreateServiceController';
import { UpdateUserController } from './controllers/User/UpdateUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { GetAllUsersController } from './controllers/User/GetAllUsersController';

import { UpdateEmployeeController } from './controllers/Employee/UpdateEmployeeController';
import { DeleteEmployeeController } from './controllers/Employee/DeleteEmployeeController';
import { GetAllEmployeeController } from './controllers/Employee/GetAllEmployeesController';
import { CreateEmployeeController } from './controllers/Employee/CreateEmployeeController';
import { UpdateCustomerController } from './controllers/Customer/UpdateCustomerController';
import { DeleteCustomerController } from './controllers/Customer/DeleteCustomerController';
import { GetAllCustomersController } from './controllers/Customer/GetAllCustomersController';
import { CreateCustomerController } from './controllers/Customer/CreateCustomerController';

import { CreateCategoryController } from './controllers/Category/CrateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/Category/GetAllCategoriesController';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';
import { CreateVideoController } from './controllers/Video/CreateVideoController';
import { GetAllVideosController } from './controllers/Video/GetAllVideosController';
import { CreateUserController } from './controllers/User/CreateUserController';

import { Router } from 'express';
import { GetAllSchedulesController } from './controllers/Schedule/GetAllSchedulesController';
import { DeleteScheduleController } from './controllers/Schedule/DeleteScheduleController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideosController().handle);

// novo projeto
routes.post('/customers', new CreateCustomerController().handle);
routes.get('/customers', new GetAllCustomersController().handle);
routes.delete('/customers/:id', new DeleteCustomerController().handle);
routes.put('/customers/:id', new UpdateCustomerController().handle);

routes.post('/employees', new CreateEmployeeController().handle);
routes.get('/employees', new GetAllEmployeeController().handle);
routes.delete('/employees/:id', new DeleteEmployeeController().handle);
routes.put('/employees/:id', new UpdateEmployeeController().handle);

routes.post('/users', new CreateUserController().handle);
routes.get('/users', new GetAllUsersController().handle);
routes.delete('/users/:id', new DeleteUserController().handle);
routes.put('/users/:id', new UpdateUserController().handle);

routes.post('/services', new CreateServiceController().handle);
routes.get('/services', new GetAllServicesController().handle);
routes.delete('/services/:id', new DeleteServiceController().handle);
routes.put('/services/:id', new UpdateServiceController().handle);

routes.post('/schedules', new CreateScheduleController().handle);
routes.get('/schedules', new GetAllSchedulesController().handle);
routes.delete('/schedules/:id', new DeleteScheduleController().handle);
routes.put('/schedules/:id', new UpdateScheduleController().handle);

export { routes }