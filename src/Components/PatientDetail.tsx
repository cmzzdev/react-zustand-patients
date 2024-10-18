import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleDelete = () => {
    deletePatient(patient.id);
    toast.error("Paciente eliminado");
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" value={patient.id} />
      <PatientDetailItem label="Nombre" value={patient.name} />
      <PatientDetailItem label="Propietario" value={patient.caretaker} />
      <PatientDetailItem label="Email" value={patient.email} />
      <PatientDetailItem label="Fecha alta" value={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" value={patient.symptoms} />
      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => handleDelete()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
