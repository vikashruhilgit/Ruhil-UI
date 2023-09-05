export const eventObj = (event, detail) => new CustomEvent(event, {
    detail,
});
export const camelCaseToString = (val) => {
    const result = val.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};
//# sourceMappingURL=util.js.map