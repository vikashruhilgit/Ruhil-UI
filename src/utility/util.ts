export const eventObj = (event: string, detail: any) =>
  new CustomEvent(event, {
    detail,
  });
