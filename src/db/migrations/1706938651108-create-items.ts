import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateItems1706938651108 implements MigrationInterface {
    name = 'CreateItems1706938651108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`items\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`item_type_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`item_types\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`items\` ADD CONSTRAINT \`FK_93f02a9196a53d0f4b2412aa42c\` FOREIGN KEY (\`item_type_id\`) REFERENCES \`item_types\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`items\` DROP FOREIGN KEY \`FK_93f02a9196a53d0f4b2412aa42c\``);
        await queryRunner.query(`DROP TABLE \`item_types\``);
        await queryRunner.query(`DROP TABLE \`items\``);
    }

}
