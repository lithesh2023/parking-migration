import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from './user.entity';
import { Booking } from './booking.entity';

@Entity ("vehicle_detail")
export class VehicleDetail {

    @PrimaryGeneratedColumn({ name: 'vehicle_id'})
    vehicleId: number;

    @Column("integer", {name: "user_id"})
    userId: number;

    @Column("character varying", {name: "reg_num", length:20})
    regNum: number;

    @Column("character varying", {name: "make", length:10})
    make: string;

    @Column("character varying", {name: "model", length:50})
    model: string;

    @ManyToOne(() => User, (user) => user.vehicles, {eager: true})
    @JoinColumn ([{ name: 'user_id', referencedColumnName: 'userId'}])
    user: User;

    @OneToOne(() => Booking)
    @JoinColumn([{ name: 'booking_id', referencedColumnName: 'bookingId'}])
    booking: Booking;

}

