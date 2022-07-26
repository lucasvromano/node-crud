import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchedules1658838408663 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'schedules',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'customer_id',
            type: 'uuid',
          },
          {
            name: 'employee_id',
            type: 'uuid',
          },
          {
            name: 'service_id',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'fk_schedules_customer',
            columnNames: ['customer_id'],
            referencedTableName: 'customers',
            referencedColumnNames: ['id']
          },
          {
            name: 'fk_schedules_employee',
            columnNames: ['employee_id'],
            referencedTableName: 'employees',
            referencedColumnNames: ['id']
          },
          {
            name: 'fk_schedules_service',
            columnNames: ['service_id'],
            referencedTableName: 'services',
            referencedColumnNames: ['id']
          }
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('schedules')
  }

}
