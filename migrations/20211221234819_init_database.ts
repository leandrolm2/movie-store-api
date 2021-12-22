import { Knex } from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('tabela_test', (table) => {
        table.bigIncrements('id', {primaryKey: true});
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('tabela_test');
}

