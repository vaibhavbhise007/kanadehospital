import { useEffect } from "react";
import AppointmentCard from "../../components/admin/AppointmentCard";
import { useAppSelector } from "../../hooks/useSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  fetchAppointments,
  updateAppointmentStatus,
} from "../../stores/actions/appointmentsAction";

export default function AdminAppointments() {
  const dispatch = useAppDispatch();
  const { appointments, loading, error } = useAppSelector(
    (state) => state.appointments
  );

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateAppointmentStatus({ id, status: newStatus }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Appointments</h1>

      <div className="space-y-6">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            patientName={appointment.patientName}
            date={appointment.date}
            time={appointment.time}
            type={appointment.type}
            status={appointment.status}
            onStatusChange={(status) =>
              handleStatusChange(appointment.id, status)
            }
          />
        ))}
      </div>
    </div>
  );
}
