import { notification } from "antd";

export const MostrarNotificacion = (name) => {
    notification.warning({
        message: "Detección de infiltrado",
        description: `La ${name} ha sido abierta`,
        className: "notifica",
    });
}