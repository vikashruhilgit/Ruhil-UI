export const eventObj = (event: string, detail: any) =>
  new CustomEvent(event, {
    detail,
  });

export const camelCaseToString = (val: string) => {
  const result = val.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};
