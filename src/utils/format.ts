import { format } from "date-fns";
import pt from 'date-fns/locale/pt-BR'

export const formattedDate = (date: Date) => {
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });
};
