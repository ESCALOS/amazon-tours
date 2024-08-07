import { useForm, type SubmitHandler } from "react-hook-form"
import { programs } from "src/constans"
import { formatDate } from "src/logic/formatter"
import { getURLToSendMessageToWhatsapp } from "src/logic/utils"
import { validateCheckoutDate, validateDate } from "src/logic/validate"

type Form = {
    name: string
    program: string
    activity: string
    checkin: string
    checkout: string
}

export default function AvailabilityForm() {
    const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm<Form>();

    const selectedProgram = watch("program");

    const filteredActivities = selectedProgram
        ? programs.find(prog => prog.name === selectedProgram)?.activities || []
        : [];

    const onSubmit: SubmitHandler<Form> = ({ name, program, activity, checkin, checkout }) => {
        const checkinFormatted = formatDate(checkin);
        const checkoutFormatted = formatDate(checkout);
        const url = getURLToSendMessageToWhatsapp({
            whatsappNumber: `51${import.meta.env.PUBLIC_PHONE_NUMBER}`,
            message: `Hola, mi nombre es *${name.trim()}*. Estoy interesado en el programa *${program}* y me gustaría participar en la actividad *${activity}*. Mi fecha de ingreso sería el *${checkinFormatted}* y la fecha de salida el *${checkoutFormatted}*. ¿Podrías proporcionarme más información?`
        })
        window.open(url, '_blank')
    }

    return (
        <section id="checkForm" className="max-w-7xl mx-auto py-32 px-6">
            <h3 className="text-4xl font-bold mb-4">
                Haz tu reserva rápida y segura.
            </h3>
            <p className="mb-8">
                Selecciona tu aventura, indica tus fechas, completa tus datos y
                nuestro equipo de atención al cliente estará siempre disponible para
                ayudarte; no esperes más, reserva ahora y vive una aventura
                inolvidable en Iquitos.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-4"
            >
                <div>
                    <label className="availability-label" htmlFor="name">
                        Nombres y Apellidos
                    </label>
                    <input
                        className="availability-input"
                        type="text"
                        placeholder="Ingresa tus datos..."
                        autoComplete="name"
                        id="name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "El nombre es requerido",
                            },
                            minLength: {
                                value: 3,
                                message: "El nombre debe tener más de 3 caracteres",
                            },
                        })}
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="relative">
                    <label className="availability-label" htmlFor="program">
                        Programa
                    </label>
                    <select
                        id="program"
                        className="appearance-none availability-input"
                        {...register("program", { required: "El programa es requerido" })}
                    >
                        <option value="">Selecciona un programa</option>
                        {programs.map(({ id, name }) => (
                            <option key={id}>{name}</option>
                        ))}
                    </select>
                    <span className="absolute right-4 text-gray-500 translate-y-4 font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                    {errors.program && (
                        <span className="text-sm text-red-500">
                            {errors.program.message}
                        </span>
                    )}
                </div>
                <div className="relative">
                    <label className="availability-label" htmlFor="activity">
                        Actividad
                    </label>
                    <select
                        id="activity"
                        className="appearance-none availability-input relative"
                        {...register("activity", {
                            required: "La actividad es requerida",
                        })}
                        disabled={!selectedProgram}
                    >
                        <option value="">Selecciona una actividad</option>
                        {filteredActivities.map(({ id, name }) => (
                            <option key={id}>{name}</option>
                        ))}
                    </select>
                    <span className="absolute right-4 text-gray-500 translate-y-4 font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                    {errors.activity && (
                        <span className="text-sm text-red-500">
                            {errors.activity.message}
                        </span>
                    )}
                </div>
                <div>
                    <label className="availability-label" htmlFor="checkin">
                        Fecha de Ingreso
                    </label>
                    <input
                        type="date"
                        id="checkin"
                        className="appearance-none availability-input"
                        placeholder="dd/mm/aaaa"
                        {...register("checkin", {
                            required: "La fecha de ingreso es requerida",
                            validate: validateDate,
                        })}
                    />
                    {errors.checkin && (
                        <span className="text-sm text-red-500">
                            {errors.checkin.message}
                        </span>
                    )}
                </div>
                <div>
                    <label className="availability-label" htmlFor="checkout">
                        Fecha de Salida
                    </label>
                    <input
                        type="date"
                        id="checkout"
                        className="appearance-none availability-input"
                        placeholder="dd/mm/aaaa"
                        {...register("checkout", {
                            required: "La fecha de salida es requerida",
                            validate: (checkout) =>
                                validateCheckoutDate(getValues("checkin"), checkout),
                        })}
                    />
                    {errors.checkout && (
                        <span className="text-sm text-red-500">
                            {errors.checkout.message}
                        </span>
                    )}
                </div>
                <div>
                    <p className="md:block font-bold mb-2 text-gray-400 hidden">
                        Consultar Ahora
                    </p>
                    <button className="w-full bg-primary-500 text-white font-semibold rounded-md opacity-100 hover:opacity-95 transition-opacity px-4 py-3">
                        Consultar Ahora
                        <svg
                            className="inline-block ml-1"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
                            ></path>
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    );
}