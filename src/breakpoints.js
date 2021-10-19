const gridBreakpoints = {
  xs: 0,
  sm: 520,
  md: 768
};

export const size = {
  mobile: gridBreakpoints.sm,
  tablet: gridBreakpoints.md
};

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`
};
