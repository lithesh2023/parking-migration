import { MigrationInterface, QueryRunner } from "typeorm";

export class MetaDummy1694505895334 implements MigrationInterface {
    name = 'MetaDummy1694505895334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public."role" (role_id, role_name, role_desc) VALUES(1, 'user', 'user')`);
        await queryRunner.query(`INSERT INTO public."role" (role_id, role_name, role_desc) VALUES(2, 'admin', 'admin')`);
        await queryRunner.query(`INSERT INTO public.parking_slot (parking_slot_id, price, grade) VALUES(1, 100, 'Grade 1')`);
        await queryRunner.query(`INSERT INTO public.parking_slot (parking_slot_id, price, grade) VALUES(2, 70, 'Grade 2');`);
        await queryRunner.query(`INSERT INTO public.parking_slot (parking_slot_id, price, grade) VALUES(3, 50, 'Grade 3')`);
        await queryRunner.query(`INSERT INTO public."user" (user_id, user_name, first_name, last_name, email_id, "password", mobile, active_status, last_login_dt, 
        created_dt, "createdBy", modified_dt, "modifiedBy")
        VALUES(1, 'testuser', 'FirstN', 'LastN', 'first.last@test.com', 
        'Password@123', '9999988888', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'testuser', CURRENT_TIMESTAMP, 'testuser')`);
        await queryRunner.query(`INSERT INTO public.user_role
        (user_role_id, user_id, role_id, active_status, created_dt, "createdBy", modified_dt, "modifiedBy")
        VALUES(1, 1, 1, true, CURRENT_TIMESTAMP, 'testuser', CURRENT_TIMESTAMP, 'testuser')`);
        await queryRunner.query(`INSERT INTO public.address
        (addr_id, user_id, address_line1, address_line2, city, state, pincode, country, coordinates, addr_type, created_dt, "createdBy", modified_dt, "modifiedBy")
        VALUES(1, 1, 'address line1', 'address line2', 'Chennai', 'Tamil Nadu', 
        '600066', 'India', '', 'Home', CURRENT_TIMESTAMP, 'testuser', CURRENT_TIMESTAMP, 'testuser')`);
        await queryRunner.query(`INSERT INTO public.vehicle_detail (vehicle_id, user_id, reg_num, make, model)
        VALUES(1, 1, 'TN-18-P-8865', 'Maruti', 'Swift')`);
        await queryRunner.query(`INSERT INTO public.booking (booking_id, user_id, parking_slot_id, from_dt, to_dt, rental_price, extra_price, discount_price, 
        final_price, advance_paid, booking_status, vehicle_id, created_dt, "createdBy", modified_dt, "modifiedBy")
        VALUES(1, 1, 1, '2023-09-01 14:00:00', '2023-09-01 21:00:00', 
        100, 0, 0, 100, 0, 'CONFIRMED', 1, CURRENT_TIMESTAMP, 'testuser', CURRENT_TIMESTAMP, 'testuser')`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from public."booking" where booking_id = 1`);
        await queryRunner.query(`delete from public."vehicle_detail" where vehicle_id = 1`);
        await queryRunner.query(`delete from public."address" where addr_id = 1`);
        await queryRunner.query(`delete from public."user_role" where user_role_id = 1`);
        await queryRunner.query(`delete from public."user" where user_id = 1`);
        await queryRunner.query(`delete from public."role" where role_id in (1, 2)`);
        await queryRunner.query(`delete from public."parking_slot" where parking_slot_id in (1, 2, 3)`);
    }

}
