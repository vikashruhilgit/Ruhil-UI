export const eventObj = (event: string, detail: any) => {
  return new CustomEvent(event, {
    detail: detail,
  });
};
