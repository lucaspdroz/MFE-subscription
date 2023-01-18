
// export const getDate = (hora) => {
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   hora.toLocaleDateString("pt-BR") // 17/9/2016
// }

export const getHour = (hora) => {
  const dateWithouthSecond = new Date(hora);

  return dateWithouthSecond.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // 00:00
}
