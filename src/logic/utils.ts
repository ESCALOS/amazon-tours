export const getURLToSendMessageToWhatsapp = ({whatsappNumber, message }: {whatsappNumber: string, message: string}) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}